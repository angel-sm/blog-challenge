/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type PrismaClient } from '@prisma/client'

export abstract class PrismaRepository {
  constructor (private readonly _client: PrismaClient) { }
  protected client () {
    return this._client
  }
}
