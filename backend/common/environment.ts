export const environment = {
  server: { port: process.env.SERVER_PORT || 3000 }, // porta que vai rodar api
  db: {url: process.env.DB_URL || 'mongodb://localhost/pdi-api'} //url de conexão com banco
}