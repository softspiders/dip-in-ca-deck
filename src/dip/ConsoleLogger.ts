import { Logger } from './CounterInteractor'

export class ConsoleLogger implements Logger {
  error(message: string): void {
    console.log(`ERROR\t${message}`)
  }

  info(message: string): void {
    console.log(`INFO\t${message}`)
  }

  trace(message: string): void {
    console.log(`TRACE\t${message}`)
  }
}
