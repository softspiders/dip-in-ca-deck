import { Logger } from "./CounterInteractor";

export class TimeLoggerImpl implements Logger {
  error(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.error(timestamp(), message)
  }

  info(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.info(timestamp(), message)
  }

  trace(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.log(timestamp(), message)
  }

}
