import { ConsoleLogger } from "./ConsoleLogger";
import { CounterInteractor } from "./CounterInteractor";

const counter = new CounterInteractor(new ConsoleLogger())

counter.increment()
counter.increment()
counter.increment()
