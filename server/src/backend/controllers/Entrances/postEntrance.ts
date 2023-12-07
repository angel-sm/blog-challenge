/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type EntranceCreator } from '../../../Context/blog/Entrances/application/EntranceCreator'
import { type Controller } from '../Controller'

type PostRequest = Request & {
  body: {
    title: string
    publishedAt: string
    author: string
    content: string
  }
}
export class postEntrance implements Controller {
  constructor (private readonly entranceCreator: EntranceCreator) {}

  async run (req: PostRequest, res: Response) {
    try {
      await this.entranceCreator.create(req.body)
      res.status(httpStatus.OK).send()
    } catch (error: Error | unknown | any) {
      res.status(httpStatus.BAD_REQUEST).send(error?.message || 'Invalid request')
    }
  }
}
