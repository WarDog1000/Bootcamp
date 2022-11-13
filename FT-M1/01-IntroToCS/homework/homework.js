'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // return parseInt(num, 2);

  let binario = num.split('').reverse();
  let suma = 0;
  for (let i = 0; i < binario.length; i++) {
    suma += binario[i] * 2 ** i;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  // const binary = [];
  // while (num > 1) {
  //   binary.unshift(Math.floor(num) % 2);
  //   num = num / 2;
  // }
  // return binary.join('');

  let rest = 0;
  const binary = [];
  while(num > 0){
    rest= num % 2; 
    binary.unshift(rest);
    num = Math.floor(num / 2);
    
  }
  return binary.join('');

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}