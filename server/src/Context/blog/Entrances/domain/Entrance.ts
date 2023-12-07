/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class Entrance {
  readonly id?: string
  readonly title: string
  readonly publishedAt?: Date
  readonly author: string
  readonly content: string

  constructor (id: string, title: string, publishedAt: Date, author: string, content: string) {
    this.id = id
    this.title = title
    this.publishedAt = publishedAt ?? new Date()
    this.author = author
    this.content = content
  }

  static Create (data: any): Entrance {
    const { id, title, publishedAt, author, content } = data
    return new Entrance(id, title, publishedAt, author, content)
  }

  toPrimitives () {
    return {
      id: this.id,
      title: this.title,
      publishedAt: this.publishedAt,
      author: this.author,
      content: this.content
    }
  }
}
