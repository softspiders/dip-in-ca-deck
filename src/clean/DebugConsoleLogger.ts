import DebugLogger from "./DebugLogger";

export default class DebugConsoleLogger implements DebugLogger {
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
