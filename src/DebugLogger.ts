export default  interface DebugLogger {
  debug(message: string): void
  info(message: string): void
  error(message: string): void
}
