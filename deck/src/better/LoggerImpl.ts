import { Logger } from "./CounterInteractor";

export class LoggerImpl implements Logger {
  error(message: string): void {
    console.error(message)
  }

  info(message: string): void {
    console.info(message)
  }

  trace(message: string): void {
    console.log(message)
  }

}
