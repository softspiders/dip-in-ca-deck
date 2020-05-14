import { Logger } from "./CounterInteractor";
import { ConsoleLogger } from "./ConsoleLogger";

export class ConsoleLoggerAdapter implements Logger {
  private consoleLogger = new ConsoleLogger()

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
