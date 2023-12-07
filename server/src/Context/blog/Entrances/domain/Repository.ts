import { type Entrance } from './Entrance'

export interface EntanceRepository {
  find: (id: string) => Promise<Entrance | null | undefined>
  search: (filter: string) => Promise<Entrance[] | any[] | undefined>
  save: (data: Entrance) => Promise<void>
}
