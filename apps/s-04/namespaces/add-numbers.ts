// Naveen's Library
namespace AddNumbers {
  export function add(params: number[]) {
    var total = 0;

    params.forEach(num => (total += num));
    console.log('(add-numbers) total =', total);

    return total;
  }

  export var data: number = 100;
  console.log('(add-numbers) data =', data);
}
