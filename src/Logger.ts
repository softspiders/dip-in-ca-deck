export interface Logger {
  trace(message: string): void
  info(message: string): void
  error(message: string): void
}
