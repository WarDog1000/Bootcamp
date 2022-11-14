function BinarioADecimal(num) {
  // convierte bimario a entero
  // return parseInt(num, 2);

  // 1 0 1 1 0
  // ↑ ↑ ↑ ↑ ↑
  // 4 3 2 1 0

  // 1 * 2 ** 4 = 16 +
  // 0 * 2 ** 3 = 0 +
  // 1 * 2 ** 2 = 4 +
  // 1 * 2 ** 1 = 2 +
  // 0 * 2 ** 0 = 0 +
  //           => 22

  let binario = num.split('').reverse();
  let suma = 0;
  for (let i = 0; i < binario.length; i++) {
    suma += binario[i] * 2 ** i;
  }
  return suma;
}

function DecimalABinario(num) {
  // convierte entero a binario

  // ej:
  // rest => 21 % 2 = 1 | next => 21 / 2 = 10.5.floor
  // rest => 10 % 2 = 0 | next => 10 / 2 = 5.floor
  // rest => 5 % 2 = 1 | next => 5 / 2 = 2.5.floor
  // rest => 2 % 2 = 0 | next => 2 / 2 = 1.floor
  // rest => 1 % 2 = 1 | next => 1 / 2 = 0.5.floor
  // 0

  let rest = 0;
  const binary = [];
  while (num > 0) {
    rest = num % 2;
    binary.unshift(rest);
    num = Math.floor(num / 2);

  }
  return binary.join('');
}

console.log(DecimalABinario('21'));
console.log(BinarioADecimal('10101'));
console.clear();

//-----------------------Recursividad------------------------------
function nFactorial(n) {
  // retorna el factorial de un n numero
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
}
console.log(nFactorial(5));
console.clear();

// Fibonasi
function nFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nFibonacci(n - 2) + nFibonacci(n - 1);
  }
}
console.log(nFibonacci(4));
console.clear();

//-----------------------Estructura de Datos------------------------------
// STACK => LIFO (last in, first out)-------------------------------------
function Stack() {
  this.arr = [];
}

Stack.prototype.setPush = function (value) {
  this.arr.push(value);
}

Stack.prototype.setPop = function () {
  this.arr.pop();
}

Stack.prototype.getSize = function () {
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
console.clear();

// QUEUE => FIFO (firt in, first out)-------------------------------------
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
}

Queue.prototype.dequeue = function () {
  if (this.array.length <= 0) {
    return undefined;
  }
  return this.array.shift();
}

Queue.prototype.size = function () {
  return this.array.length;
}

var miQueue = new Queue();
console.log(miQueue);
miQueue.enqueue(0);

miQueue.enqueue(1);
miQueue.enqueue(2);
miQueue.enqueue(3);
miQueue.enqueue(4);
console.log(miQueue);
miQueue.dequeue();
console.log(miQueue);
console.log(miQueue.size());
console.clear();

// LinkedList-------------------------------------------------------------
function Lista() {
  this.head = null;
}


Lista.prototype.add = function (value) {
  // creamos el nuevo Nodo
  const newNode = new Node(value);

  // puntero nacido desde el principio
  let current = this.head;

  // si no tenemos head, insertamos el nodo al HEAD
  if (current === null) {
    this.head = newNode;
    return value;
  }

  // mientras current tenga un valor donde ir => next=null
  while (current.next !== null) { // si this.head.next = {value: 1, next = null}
    current = current.next; // current = this.head.next => {value: 1, next = null}
  }

  current.next = newNode;
  return value;
}

const miListDemo = new Lista();
miListDemo.add(10);

// LinkedList-------------------------------------------------------------
/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this.len = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  let current = this.head;
  this.len++;

  if (current === null) {
    this.head = newNode;
    return value;
  }
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return value;

  // var newNodo = new Node(value);
  // let current = this.head;
  // if (current == null) {
  // 	current = newNodo;
  //   return value;
  // } else {
  // 	current = current.next;
  // 	while (current.next !== null) {
  // 		current = current.next;
  // 	}
  // 	current.next = newNodo;
  // }
  // this.len++;
  // return value;
}

LinkedList.prototype.remove = function () {
  let value;
  if (this.len <= 0) {
    return null;
  } else if (this.len == 1) {
    value = this.head.value;
    this.head = null;
    this.len--;
    return value;
  } else {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    value = current.next.value;
    current.next = null;
    this.len--;
    return value;
  }
}

LinkedList.prototype.search = function (value) {
  if (this.len == 0) return console.log('Es una lista vacia');
  var pointer = this.point;
  var check = false;
  if (pointer.value == value) check = true;
  while (!check && pointer.next != null) {
    pointer = pointer.next;
    if (pointer.value == value) check = true;
  }
  if (check) {
    return pointer.value;
  } else {
    return undefined;
  }
}

const miList = new LinkedList();
miList.add('#1')
// miList.add('#2')
// miList.add('#3')
console.log(miList)
miList.remove();
console.log(miList)
miList.search('#1')



//-----------------------------------------------
function hashtable() {
  this.numbacets = 35;
  this.bucets = [];
}

function hash(string) { }
  //J => charCodeAt => codigo numerico de J = 10
  //O => charCodeAt => codigo numerico de J = 5
  //R => charCodeAt => codigo numerico de J = 12
  //G => charCodeAt => codigo numerico de J = 6
  //E => charCodeAt => codigo numerico de J = 1
  //