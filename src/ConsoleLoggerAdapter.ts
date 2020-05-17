import { Logger } from "./CounterInteractor"
import DebugConsoleLogger from "./DebugConsoleLogger"

export class ConsoleLoggerAdapter implements Logger {
  private consoleLogger = new DebugConsoleLogger()

  error(message: string): void {
    this.consoleLogger.error(message)
  }

  info(message: string): void {
    this.consoleLogger.info(message)
  }

  trace(message: string): void {
    this.consoleLogger.debug(message)
  }

}
