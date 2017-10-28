import { log, enumerable } from './decorators';

@log
export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

@log
export class MyClass {
  @enumerable(true)
  myMethod() {
    return 'my message';
  }
}
