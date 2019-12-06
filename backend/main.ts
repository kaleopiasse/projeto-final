import { goalsRouter } from './components/goal/goal.router';
import { pdisRouter } from './components/pdi/pdi.router';
import { PeriodModel } from './components/period/period.model';
import { periodsRouter } from './components/period/period.router';
import { statusRouter } from './components/status/status.router';
import { usersTypeRouter } from './components/users-type/user-type.router';
import { usersRouter } from './components/users/users.router';
import { mainRouter } from './main.router';
import { Server } from './server/server';

const server = new Server()
server.bootstrap([
  usersRouter,
  usersTypeRouter,
  pdisRouter,
  periodsRouter,
  goalsRouter,
  statusRouter,
  mainRouter
]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})