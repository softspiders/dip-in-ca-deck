export class ConsoleLogger {
  trace(message: string): void {
    console.log(`TRACE\t${message}`)
  }

  info(message: string): void {
    console.log(`INFO\t${message}`)
  }

  error(message: string): void {
    console.log(`ERROR\t${message}`)
  }
}
