function testA(num) {
  // convierte bimario a entero
  return parseInt(num, 2);

  // const entero = [];
  // const binary = [num];
  //  for(let i=0;i<binary.lenth;i++){
  //   entero.push((binary[i]*2)**(binary.lenth-i));
  // }
  // return entero.reduce((a,b) => a + b);
}

function testB(num) {
  // convierte entero a binario
  // return parseFloat(num);

  // ej:
  // 21/2 = .round => 10,  21%2 => 1 last
  // 10/2 = .round => 5, 10%2 => 0
  // 5/2 = 2 .round, 5%2 => 1
  // 2/2 = 1 .round, 2%2 => 0
  // 1/2 = 0 .round, 1%2 => 1 first
  // 10101

  const binary = [];
  let next = num;
  while (next > 1) {
    binary.unshift(Math.floor(next) % 2);
    next = next / 2;
  }
  return binary.join('');
}

console.log(testA(1011));
console.log(testB(11));
console.clear();

//-----------------------------------------------------
// Recursividad
function nFactorial(n) {
  // retorna el factorial de un n numero
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
}

console.log(nFactorial(5));
console.clear();

// Fibonasi
function nFibonacci(n) {
  
}

//-----------------------------------------------------
// STACK => LIFO (last in, first out)
function Stack() {
  this.arr = [];
}

Stack.prototype.setPush = function (value) {
  this.arr.push(value);
}

Stack.prototype.setPop = function (value) {
  this.arr.pop();
}

Stack.prototype.getSize = function (value) {
  return this.arr.length;
}

var miStack = new Stack();
console.log(miStack);
miStack.setPush(10);
miStack.setPush(5);
miStack.setPush(7);
console.log(miStack);
miStack.setPop();
console.log(miStack);
console.log(miStack.getSize());
// console.clear();

//-----------------------------------------------------
// QUEUE => FIFO (firt in, first out)


//-----------------------------------------------------