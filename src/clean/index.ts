import CounterInteractor from "./CounterInteractor"
import { ConsoleLoggerAdapter } from "./ConsoleLoggerAdapter"

const counter = new CounterInteractor(new ConsoleLoggerAdapter())

counter.increment()
counter.increment()
counter.increment()
