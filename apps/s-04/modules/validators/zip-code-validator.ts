import { StringValidator } from './string-validator';

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    console.log('ZipCodeValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.length === 5;
  }
}
