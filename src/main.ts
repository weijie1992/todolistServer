import Koa from 'koa'
import Helmet from 'koa-helmet'
import Router from 'koa-router'
import auth from './context-handlers/auth.js'
import { Task } from './context-handlers/task.js'

import bodyParser from 'koa-bodyparser'

const taskContextHandler = new Task()

const app = new Koa()
app.use(
  Helmet({
    contentSecurityPolicy: false,
    referrerPolicy: { policy: 'no-referrer' },
    noSniff: true,
    ieNoOpen: true,
    permittedCrossDomainPolicies: {
      permittedPolicies: 'none'
    },
    hidePoweredBy: true,
    xssFilter: true,
    frameguard: {
      action: 'deny'
    },
    crossOriginResourcePolicy: {
      policy: 'same-origin'
    },
    crossOriginOpenerPolicy: true,
    hsts: false,
    dnsPrefetchControl: {
      allow: false
    },
    expectCt: false
  })
)

app.use(bodyParser())

const router = new Router({
  prefix: '/api'
})

router.post('/signUp', auth.signUp)

router.get('/getAllTask', taskContextHandler.getAllTask)

app.use(router.routes())

app.listen(3002, () => {
  console.log('Serer on port:3002')
})
