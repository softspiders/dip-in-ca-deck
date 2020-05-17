export interface Counter {
  increment(): void
}

export interface Logger {
  trace(message: string): void
  info(message: string): void
  error(message: string): void
}

export default class CounterInteractor implements Counter {
  private count: number = 0

  constructor(private loggerOut: Logger) {}

  increment(): void {
    this.count++
    this.loggerOut.trace(`count = ${this.count}`)
  }

}
