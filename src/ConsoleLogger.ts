import { LoggerDev } from "./LoggerDev";

export class ConsoleLogger implements LoggerDev {
  error(message: string): void {
    console.error(message)
  }

  info(message: string): void {
    console.info(message)
  }

  debug(message: string): void {
    console.log(message)
  }
}
