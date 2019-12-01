import { mainRouter } from './main.router';
import { Server } from './server/server';
import { usersTypeRouter } from './users-type/user-type.router';
import { usersRouter } from './users/users.router';

const server = new Server()
server.bootstrap([
  usersRouter,
  usersTypeRouter,
  mainRouter
]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})