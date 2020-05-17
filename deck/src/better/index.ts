import { LoggerImpl } from "./LoggerImpl";
import { CounterInteractor } from "./CounterInteractor";
import { TimeLoggerImpl } from "./TimeLoggerImpl";

const counter = new CounterInteractor(new LoggerImpl())
//const counter = new CounterInteractor(new TimeLoggerImpl())

counter.increment()
counter.increment()
counter.increment()
