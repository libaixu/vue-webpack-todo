const Koa = require('kos')
const app = new Koa()
const isDev = process.env.NOOD_ENV === 'development'

app.use(async (ctx, next) => {
  
})
