/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type EntranceSearcher } from '../../../Context/blog/Entrances/application/EntranceSearcher'
import { type Controller } from '../Controller'

export class getEntrances implements Controller {
  constructor (private readonly entranceSearcher: EntranceSearcher) {}

  async run (req: Request, res: Response) {
    try {
      const { filter } = req.query
      const entrances = await this.entranceSearcher.search(filter as string)
      res.status(httpStatus.OK).send({
        entrances,
        status: 'success',
        httpStatus: httpStatus[200]
      })
    } catch (error: Error | unknown | any) {
      res.status(httpStatus.BAD_REQUEST).send(error?.message || 'Invalid request')
    }
  }
}
