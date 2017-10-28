import { Greeter, MyClass } from './classes';

const greeter = new Greeter('TypeScript!');
console.log('  message:', greeter.greet());

const myObj = new MyClass();
console.log('  message:', myObj.myMethod());
