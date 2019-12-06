import { User } from './components/users/users.model';

declare module 'restify' {
  export interface Request {
    authenticated: User
  }
}
