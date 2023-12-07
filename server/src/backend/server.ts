/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-types */
import { json, urlencoded } from 'body-parser'
import express, { type Request, type Response } from 'express'
import Router from 'express-promise-router'
import type * as http from 'http'
import httpStatus from 'http-status'
import { registerRoutes } from './routes'
import cors from 'cors'

export class Server {
  private readonly express: express.Express
  private readonly port: string
  private httpServer?: http.Server

  constructor (port: string) {
    this.port = port
    this.express = express()
    this.express.use(cors({
      origin: '*',
      credentials: true
    }))
    this.express.use(json())
    this.express.use(urlencoded({ extended: true }))
    const router = Router()
    this.express.use(router)

    registerRoutes(router)

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    })
  }

  async listen (): Promise<void> {
    await new Promise<void>(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        )
        console.log('Press CTRL-C to stop\n')
        resolve()
      })
    })
  }

  getHTTPServer () {
    return this.httpServer
  }

  async stop (): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            reject(error); return
          }
          resolve()
        })
      }

      resolve()
    })
  }
}
