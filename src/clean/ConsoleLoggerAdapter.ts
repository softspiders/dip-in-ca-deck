import { Logger } from "./CounterInteractor"
import DebugConsoleLogger from "./DebugConsoleLogger"

export class ConsoleLoggerAdapter implements Logger {
  private logger = new DebugConsoleLogger()

  error(message: string): void {
    this.logger.error(message)
  }

  info(message: string): void {
    this.logger.info(message)
  }

  trace(message: string): void {
    this.logger.debug(message)
  }

}
