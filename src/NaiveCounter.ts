import { NaiveLogger } from "./NaiveLogger";

export class NaiveCounter {
  private count = 0
  private logger = new NaiveLogger()

  increment(): void {
    this.count++
    this.logger.trace(`count = ${this.count}`)
  }

}
