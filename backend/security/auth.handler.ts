import * as jwt from 'jsonwebtoken';
import * as restify from 'restify';
import { NotAuthorizedError } from 'restify-errors';

import { environment } from '../common/environment';
import { User } from '../users/users.model';

export const authenticate: restify.RequestHandler = (req, resp, next)=>{
  const {email, password} = req.body
  User.findByEmail(email, '+password') //1st
    .then(user=>{
      if(user && user.matches(password)){ //2nd
        //gerar o token
        //3rd
        const token = jwt.sign({sub: user.email, iss: 'pdi-api'},
                  environment.security.apiSecret)
        resp.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          accessToken: token,
          profiles: user.profiles
        })
        return next(false)
      } else {
        return next(new NotAuthorizedError('Invalid Credentials'))
      }
  }).catch(next)
}