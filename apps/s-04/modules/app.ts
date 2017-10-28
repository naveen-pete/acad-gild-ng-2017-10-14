import { ZipCodeValidator } from './validators/zip-code-validator';
import { CSV } from './validators/contains-space-validator';

let result: boolean;

let myValidator = new ZipCodeValidator();
result = myValidator.isAcceptable('123');
console.log('  result =', result);

result = myValidator.isAcceptable('12345');
console.log('  result =', result);

myValidator = new CSV();
result = myValidator.isAcceptable('Bengaluru');
console.log('  result =', result);

result = myValidator.isAcceptable('New Delhi');
console.log('  result =', result);
