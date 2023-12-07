import { type Entrance } from '../domain/Entrance'
import { type EntanceRepository } from '../domain/Repository'

export class EntranceSearcher {
  private readonly entanceRepository: EntanceRepository

  constructor (repository: EntanceRepository) {
    this.entanceRepository = repository
  }

  async search (filter: string): Promise<Entrance[] | null | undefined> {
    try {
      const entrances = await this.entanceRepository.search(filter)
      return entrances
    } catch (error) {
      throw new Error(error as any)
    }
  }
}
