/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable n/no-path-concat */
import { type Router } from 'express'
import { sync } from 'glob'

export function registerRoutes (router: Router) {
  const routes = sync(__dirname + '/**/*.route.*')
  routes.map((route: string) => { register(route, router) })
}

function register (routePath: string, router: Router) {
  const route = require(routePath)
  route.register(router)
}
