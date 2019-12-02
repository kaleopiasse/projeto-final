import * as restify from 'restify';

import { ModelRouter } from '../common/model-router';
import { UserType } from './user-type.model';

class UsersTypeRouter extends ModelRouter<UserType> {

  constructor() {
    super(UserType)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll),
    application.post(`${this.basePath}`, this.save)
  }

}

export const usersTypeRouter = new UsersTypeRouter()