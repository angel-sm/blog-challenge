/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Entrance } from '../domain/Entrance'
import { type EntanceRepository } from '../domain/Repository'
import { PrismaRepository } from '../../../shared/infrastructure/persistence/prisma/PrismaRepository'

export class Repository extends PrismaRepository implements EntanceRepository {
  async find (id: string): Promise<Entrance | null | undefined> {
    try {
      const document = await this.client().entrances.findFirstOrThrow({
        where: {
          id
        }
      })
      const entrance = Entrance.Create(document)
      return entrance ?? null
    } catch (error) {
      throw new Error(error as any)
    }
  }

  async search (filter: string): Promise<any[] | Entrance[] | undefined> {
    try {
      const searchStatement = {
        where: {
          OR: [
            {
              author: {
                contains: filter
              }
            },
            {
              title: {
                contains: filter
              }
            },
            {
              content: {
                contains: filter
              }
            }
          ]
        }
      }

      let query = {
        orderBy: {
          publishedAt: 'desc'
        }
      }

      if (filter) {
        query = {
          ...searchStatement,
          ...query
        }
      }

      const documents = await this.client().entrances.findMany(query as any)
      const entrances = documents.map(document => Entrance.Create(document))
      return entrances
    } catch (error) {
      throw new Error(error as any)
    }
  }

  async save (data: Entrance): Promise<void> {
    try {
      await this.client().entrances.create({
        data
      })
    } catch (error) {
      throw new Error(error as any)
    }
  }
}
