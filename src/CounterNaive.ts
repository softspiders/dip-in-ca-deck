import { ConsoleLogger } from "./ConsoleLogger";

export interface Counter {
  increment(): void
}

export class CounterNaive implements Counter {
  private count: number = 0
  private logger: ConsoleLogger = new ConsoleLogger()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
