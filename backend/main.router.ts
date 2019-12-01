import * as restify from 'restify';

import { Router } from './common/router';

class MainRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/', (req, resp, next)=>{
      resp.json({
        users: '/users',
        usersType: '/usertypes'
      })
    })
  }
}

export const mainRouter = new MainRouter()
