import { Entrance } from '../domain/Entrance'
import { type EntanceRepository } from '../domain/Repository'

interface Request {
  title: string
  publishedAt: string
  author: string
  content: string
}

export class EntranceCreator {
  private readonly entanceRepository: EntanceRepository

  constructor (repository: EntanceRepository) {
    this.entanceRepository = repository
  }

  async create (request: Request): Promise<Entrance> {
    try {
      const entrance = Entrance.Create(request)
      await this.entanceRepository.save(entrance)
      return entrance
    } catch (error) {
      throw new Error(error as any)
    }
  }
}
