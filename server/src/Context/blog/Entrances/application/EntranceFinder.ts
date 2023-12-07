import { type Entrance } from '../domain/Entrance'
import { type EntanceRepository } from '../domain/Repository'

export class EntranceFinder {
  private readonly entanceRepository: EntanceRepository

  constructor (repository: EntanceRepository) {
    this.entanceRepository = repository
  }

  async find (id: string): Promise<Entrance | null | undefined> {
    try {
      const entrances = await this.entanceRepository.find(id)
      return entrances
    } catch (error) {
      throw new Error(error as any)
    }
  }
}
