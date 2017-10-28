// Hari's Library
namespace AddStrings {
  export function add(params: string[]) {
    var total = '';

    params.forEach(str => (total += str + ' '));
    console.log('(add-strings) total =', total);

    return total;
  }

  export var data: string = 'some string data';
  console.log('(add-strings) data =', data);
}
