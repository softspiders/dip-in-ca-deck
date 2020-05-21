import { Logger } from './CounterInteractor'

export class TimeConsoleLogger implements Logger {
  error(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.info(`ERROR\t${timestamp()}\t${message}`)
  }

  info(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.info(`INFO\t${timestamp()}\t${message}`)
  }

  trace(message: string): void {
    const timestamp = () => `[${new Date().toUTCString()}]`
    console.info(`TRACE\t${timestamp()}\t${message}`)
  }

}
