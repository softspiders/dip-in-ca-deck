import { ConsoleLogger } from './ConsoleLogger'

export class NaiveCounter {
  private count = 0
  private logger = new ConsoleLogger()

  increment(): void {
    this.count++
    this.logger.info(`count = ${this.count}`)
  }

}
