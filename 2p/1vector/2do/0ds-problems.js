/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 
 *SOLUCION
 
 let numbers = [ 4,2,1,6,8,3,9,7];
    numbers.splice(3,0,'Número');
    console.log(numbers);
 
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 
 *SOLUCION
let nums = [1,2,3,4,5,9,7],  pos=3, eliminar = nums.splice(pos, 1);
    console.log(nums); 

    
 * PROBLEM 3
 * insertFirst(v)
 *
 * inserts value v at first position
 * @arg {number} v - value
 *
 * @example
 * insertFirst(4)
 * may wrap method unshift
 * Verify operation result by outputing the array before and after

*SOLUCION
    let numeros = [2,3,4,5] , primero = 9 , N = numeros.length;
    
        for (let i = N; i >= 0; --i) {
        numeros[i] = numeros[i-1];
   }
    numeros[0] =primero;
    console.log(numeros); 
 
 * PROBLEM 4
 * removeLast()
 *
 * removes value at last position
 * @arg {number} v - value
 *
 * @example
 * removeLast()
 * may wrap method pop
 * Verify operation result by outputing the array before and after

*SOLUCION

let nums = [4,6,8,10,12];
   nums.pop();
   console.log(nums);
   
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
