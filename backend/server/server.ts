import * as fs from 'fs';
import * as mongoose from 'mongoose';
import * as restify from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';

import { environment } from '../common/environment';
import { Router } from '../common/router';
import { tokenParser } from '../security/token.parser';
import { handleError } from './error.handler';
import { mergePatchBodyParser } from './merge-patch.parser';

export class Server {

  application: restify.Server

  initializeDb() {
    (<any>mongoose).Promise = global.Promise
    return mongoose.connect(environment.db.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }

  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: 'PDI API',
          version: '1.0.0',
          certificate: fs.readFileSync('./security/keys/cert.pem'),
          key: fs.readFileSync('./security/keys/key.pem')
        })

        const corsOptions: corsMiddleware.Options = {
          preflightMaxAge: 10,
          origins: ['http://localhost:4200'],
          allowHeaders: ['authorization'],
          exposeHeaders: ['x-custom-header']
        }

        const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)

        this.application.pre(cors.preflight)

        this.application.use(cors.actual)
        this.application.use(restify.plugins.queryParser())
        this.application.use(restify.plugins.bodyParser())
        this.application.use(mergePatchBodyParser)
        this.application.use(tokenParser)

        //routes
        for (let router of routers) {
          router.applyRoutes(this.application)
        }

        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        })

        this.application.on('restifyError', handleError)

      } catch (error) {
        reject(error)
      }
    })
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initializeDb().then(() =>
      this.initRoutes(routers).then(() => this))
  }

  shutdown(){
    return mongoose.disconnect().then(()=>this.application.close())
  }

}