/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type EntranceFinder } from '../../../Context/blog/Entrances/application/EntranceFinder'
import { type Controller } from '../Controller'

export class getEntrance implements Controller {
  constructor (private readonly entranceFinder: EntranceFinder) {}

  async run (req: Request, res: Response) {
    try {
      const { id } = req.params
      const entrance = await this.entranceFinder.find(id)
      res.status(httpStatus.OK).send({
        entrance,
        status: 'success',
        httpStatus: httpStatus[200]
      })
    } catch (error: Error | unknown | any) {
      res.status(httpStatus.BAD_REQUEST).send(error?.message || 'Invalid request')
    }
  }
}
