export class ConsoleLogger {
  trace(message: string): void {
    console.log(message)
  }

  info(message: string): void {
    console.info(message)
  }

  error(message: string): void {
    console.error(message)
  }
}
