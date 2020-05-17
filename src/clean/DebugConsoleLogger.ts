import DebugLogger from './DebugLogger'

export default class DebugConsoleLogger implements DebugLogger {
  error(message: string): void {
    console.log(`ERROR\t${message}`)
  }

  info(message: string): void {
    console.log(`INFO\t${message}`)
  }

  debug(message: string): void {
    console.log(`DEBUG\t${message}`)
  }
}
