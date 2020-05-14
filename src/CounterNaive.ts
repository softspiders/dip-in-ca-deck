import { LoggerImpl } from "./LoggerImpl";

export interface Counter {
  increment(): void
}

export class CounterNaive implements Counter {
  private count: number = 0
  private logger: LoggerImpl = new LoggerImpl()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
