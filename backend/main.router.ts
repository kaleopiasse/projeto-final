import * as restify from 'restify';

import { Router } from './common/router';

class MainRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/', (req, resp, next)=>{
      resp.json({
        users: '/users',
        usersType: '/usertypes',
        pdis: '/pdis',
        periods: '/periods',
        goals: '/goals',
        status: '/status',
        selffeedbacks: '/selffeedbacks',
        wheelofskills: '/wheelofskills',
      })
    })
  }
}

export const mainRouter = new MainRouter()
