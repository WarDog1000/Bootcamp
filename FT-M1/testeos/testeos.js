function testA(num) {
  // convierte bimario a entero
  // return parseInt(num, 2);

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
  while(next > 1){
    binary.unshift(Math.floor(next) % 2);
    next = next / 2;
  }
  return binary.join('');
}

console.log(testA(1011));
console.log(testB(11));
console.clear();