/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Server } from './server'

export class App {
  server?: Server

  async start () {
    const port = process.env.PORT ?? '5000'
    this.server = new Server(port)
    await this.server.listen()
  }

  get httpServer () {
    return this.server?.getHTTPServer()
  }

  async stop () {
    return await this.server?.stop()
  }
}
