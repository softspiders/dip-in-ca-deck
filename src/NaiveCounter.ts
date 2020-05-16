import { LoggerImpl } from "./LoggerImpl";

export class NaiveCounter {
  private count = 0
  private logger = new LoggerImpl()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
