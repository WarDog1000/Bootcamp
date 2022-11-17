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

  let binario = num.split("").reverse();
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
  return binary.join("");
}

console.log(DecimalABinario("21"));
console.log(BinarioADecimal("10101"));
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
};

Stack.prototype.setPop = function () {
  this.arr.pop();
};

Stack.prototype.getSize = function () {
  return this.arr.length;
};

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
};

Queue.prototype.dequeue = function () {
  if (this.array.length <= 0) {
    return undefined;
  }
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

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
  while (current.next !== null) {
    // si this.head.next = {value: 1, next = null}
    current = current.next; // current = this.head.next => {value: 1, next = null}
  }

  current.next = newNode;
  return value;
};

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

  // si la lista estaba vacia, insertamos el nodo en su head
  if (current === null) {
    //(!current)
    this.head = newNode;
    return value;
  }

  // se mueve   hasta llegar a un next vacio
  while (current.next !== null) {
    //(current.next)
    current = current.next;
  }

  // inserta un nodo en la propriedad next del nodo
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
};

LinkedList.prototype.remove = function () {
  let value;
  if (this.len <= 0) {
    // si la lsita esta vacia
    return null;
  } else if (this.len == 1) {
    // si la lista tiene un solo nodo
    value = this.head.value;
    this.head = null;
    this.len--;
    return value;
  } else {
    // si la lista no esta vacia y no tiene un solo nodo
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    value = current.next.value;
    current.next = null;
    this.len--;
    return value;
  }
};

LinkedList.prototype.search = function (arg) {
  let current = this.head;
  // recorre la lista hasta llegar al final
  while (current) {
    // si el agrgumento es una funcion?
    if (typeof arg === "function") {
      // se pasa el value actual a la funcion
      if (arg(current.value)) {
        // si el resultado de la funcion es true, devuelve el valor actual
        return current.value;
      }
    } else {
      // si es un dato, comparo que sea igual al valor actual
      if (current.value === arg) {
        // si el dato es igual al valor actual, lo devuelvo
        return current.value;
      }
    }
    // me muevo a la siguiente posicion
    current = current.next;
  }
  // si recorri toda la lista y no encontre nada, retorno null
  return null;
};

const miList = new LinkedList();
miList.add("#1");
// miList.add('#2')
// miList.add('#3')
console.log(miList);
miList.remove();
console.log(miList);
miList.search("#1");

// hashTable-----------------------------------------------
// J => charCodeAt => codigo numerico de J = 10
// O => charCodeAt => codigo numerico de J = 5
// R => charCodeAt => codigo numerico de J = 12
// G => charCodeAt => codigo numerico de J = 6
// E => charCodeAt => codigo numerico de J = 1
// total = 34
// resultado = Total % numBuckets => INDICE

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
 }

 HashTable.prototype.hash = function (string) {
  let acumulador = 0;
  for(const caracter of string){
    const num = caracter.charCodeAt();
    acumulador += num;
  }
  return acumulador % this.numBuckets;
 }

 HashTable.prototype.set = function (key, value) {
  // si la clave no es un string, arroja un error
  if(typeof key !== 'string') throw TypeError('Keys must be strings');

  // sacamos el indice con la funcion hash
  const index = this.hash(key);

  // si no hay nada en ese indice del arreglo
  if(!this.buckets[index]){
    // almacenamos un objeto en ese indice del arreglo
  this.buckets[index] = {};
  }
  // le agregamos a ese objeto una clave igual al valor ingresado
  this.buckets[index][key] = value;
 }

 HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  // si NO esta la propriedad, retornamos un undefined
  if(!this.buckets[index][key]) return undefined;
  // si esta la propriedad, la retornamos
  return this.buckets[index][key];
 }

 HashTable.prototype.hasKey = function (key) {
  const index = this.hash(key);

  // retorna true o false si se encuentra la propriedad
  return !!this.buckets[index][key];
 }

// BinaryTree-------------------------------------------------------------
/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) {
    count += this.left.size();
  }
  if (this.right) {
    count += this.right.size();
  }
  return count;
};
BinarySearchTree.prototype.insert = function (value) {
  // me pregunto si es mayor o menor => derecha | izquierda
  // pregunto si hay algo ene esa direccion
  // si no hay NamedNodeMap, inserto un nuevo nodo
  // si hay algo, inserto hacia ese lado

  if (value < this.value) {
    // es menor LEFT
    if (this.left) {
      // si hay algo em left
      this.left.insert(value);
    } else {
      // si no hay nada en left
      this.left = new BinarySearchTree(value);
      return value; //para cortar la ejecucion
    }
  } else {
    // es mayor RIGHT
    if (this.right) {
      // si hay algo em right
      this.right.insert(value);
    } else {
      // si no hay nada en right
      this.right = new BinarySearchTree(value);
      return value; //para cortar la ejecucion
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true; // devuelve verdaderp si el valor que estoy buscando se encuentra en el primer nivel

  //  tengo algo a la izquierda y el valor esta?
  if (this.left && this.left.contains(value)) return true;

  //  tengo algo a la derecha y el valor esta?
  if (this.right && this.right.contains(value)) return true;

  // si ninguno de los casos se cumple
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
  // in order (caso por defecto)
  // post order
  // pre order

  switch (type) {
    case 'pre-order':
      // nodo
      cb(this.value);
      // izquierda
      if(this.left) this.left.depthFirstForEach(cb, type);
      // derecha
      if(this.right) this.right.depthFirstForEach(cb, type);
      break;
    case 'post-order':
      // izquierda
      if(this.left) this.left.depthFirstForEach(cb, type);
      // derecha
      if(this.right) this.right.depthFirstForEach(cb, type);
      // nodo
      cb(this.value);
      break;
    default:
      // izquierda
      if(this.left) this.left.depthFirstForEach(cb, type);
      // nodo
      cb(this.value);
      // derecha
      if(this.right) this.right.depthFirstForEach(cb, type);
      break;
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue) {
  // queue (pila)
  // niveles

  // si ya te pase una pila, no me crees otra, sino crea una pila
  if (!queue){
    var queue = [];
  }

  // ejecuto la callback
  cb(this.value);
  // guardo mis hijos
  if(this.left) queue.push(this.left); // si tengo hijos a la izquierda
  if(this.right) queue.push(this.right); // si tengo hijos a la derecha

  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};