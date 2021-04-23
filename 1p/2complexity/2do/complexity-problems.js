//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
let num1,num2,mcm,i;
  num1=prompt(' Ingrese el primer valor ' );
  num1=parseInt(num1);
  num2=prompt(' Ingrese el segundo valor ' );
 num2=parseInt(num2);
  mcm=1;
  i=2;
  
  while(i <= num1 || i <= num2)
        {
            if(num1%i==0 || num2%i==0)
            {
            mcm=mcm*i;
            if(num1%i==0) num1=num1/i;
            if(num2%i==0) num2=num2/i;
            }
            else
                i=i+1;      
        }
  console.log(' El Minímo Común Múltiplo es ' + mcm);

//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements


//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]


//4. random name
//   randomName()
// -> 
// <- one random name
// ie name371
function random(n) {
	return Math.floor(Math.random() * n + 1)
}
random(10)

function randomName() {
	let nombre = 'name'
	return console.log(nombre + random(10))
}
random(10)
randomName()
