/* eslint-disable @typescript-eslint/no-extraneous-class */
import { PrismaClient } from '@prisma/client'

export class PrismaFactory {
  static createClient (): PrismaClient {
    const client = new PrismaClient()
    return client
  }
}
