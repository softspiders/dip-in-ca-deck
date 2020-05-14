import { LoggerImpl } from "./LoggerImpl";

export class CounterNaive {
  private count: number = 0
  private logger: LoggerImpl = new LoggerImpl()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
