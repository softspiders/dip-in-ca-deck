export interface Counter {
  increment(): void
}

export interface Logger {
  trace(message: string): void
  info(message: string): void
  error(message: string): void
}

export class CounterInteractor implements Counter {
  private count: number = 0

  constructor(private logger: Logger) {}

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
