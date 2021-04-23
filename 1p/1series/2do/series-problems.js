// INSTRUCTIONS
//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// make sure they run on a browser printing the result
//
// SERIES

//0. Sample - problem statment, NOTE this is actually NOT a exercise, but an EXAMPLE
//
//   sample(n) //routine calling
//
// -> input, preconditions, arguments
// <- output, postconditions, result


//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
function fibonacci(n) {
	let a = 0,
		b = 1,
		c,
		s = 1

	for (i = 3; i <= n; i++) {
		c = a + b
		console.log(c)
		s = s + c
		a = b
		b = c
	}
}
fibonacci(10)

//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
const potencia = parseInt(prompt('Introduce la potencia: '));
let n1 = 1;


for (let i = 1; i <= potencia; i++) {
    n1*=2;
    console.log(n1);
}



//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
let n=prompt('Ingresa el numero a convertir a factorial');
let factorial=1;
let x=1;
while(x<=n){
factorial=factorial*x;
console.log('Factorial  de '+  x + '=' + factorial );
x++;
}


//2. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^n
let potencia=10;
  
for(let x=1; x<=potencia; x++){
console.log(' La potencia de 10 es: ' + x + ' igual a ' + Math.pow(10,x));
}
