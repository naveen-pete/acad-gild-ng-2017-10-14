// Class Decorator
export function log(target: Function) {
  console.log('log() invoked. Class:', target.name);
}

// Method Decorator
export function enumerable(value: boolean) {
  console.log('enumerable() invoked.');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    console.log(
      `  target: ${JSON.stringify(
        target
      )}, propertyKey: ${propertyKey}, descriptor: ${JSON.stringify(
        descriptor
      )}`
    );
  };
}
