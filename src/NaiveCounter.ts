import { Logger } from "./Logger";

export class NaiveCounter {
  private count = 0
  private logger = new Logger()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
