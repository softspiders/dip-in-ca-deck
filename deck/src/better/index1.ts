import { CounterInteractor } from './CounterInteractor'
import { TimeConsoleLogger } from './TimeConsoleLogger'

const counter = new CounterInteractor(new TimeConsoleLogger())

counter.increment()
counter.increment()
counter.increment()
