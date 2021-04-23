//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING


//1. bubble - your implementation 
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
function numerosaleatorios()
  {
    let a=Math.random()*100;
    return Math.floor(1+a);
  }
let b=[];
for (x=0;x<4;x++)
{
    let nam=numerosaleatorios();
    b[x]=nam; 
}
console.log("numeros "+"<br>"  + b);
    for (let k=1; k < b.length; k++) {
        for (i=0; i<(b.length-k);i++){
            if (d[i]> b [i+1]){
                aux= b [i];
                b[i]=b[i+1];
                b[i+1]=aux;
            }
        }
    }
    console.log("ordenados" + b);

//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
let d = [];
	

	for(i = 1; i<7;i++){
	  let rnd = Math.floor(1 + (Math.random()) *(100));
	  d.push(rnd);
	}
	

	document.write('Array sin ordenar: '+d+'<br>');
	document.write('Array ordenado: '+d.sort());
	//Solucion con funciones
	let d = [];
	  
	document.write('Array sin ordenar: '+fillarray(d)+'<br>');
	document.write('Array ordenado: '+sort(d));
	               
	function fillarray(d){
	  for(i = 1; i<7;i++){
	  let rnd = Math.floor(1 + (Math.random()) *(100));
	  d.push(rnd);
	}
	  return d;
	}
	function sort(d){
		d.sort();
	  return d;
	}

//3. bubble - your implementation 
//   sort(o)
// -> o an object containing random names: either an array of objects or an object of objects
// <- the random names sorted
// verify is sorted
let num1=[random + * 4];
function orden_Burbuja(num) { 
    let v= num.length - 1;
    let intercambio;
     
     do{
       intercambio=false;
       for(let i=0;i<v;i++){
       if(num[i]>num[i+1]){
          let temp=num[i];
          num[i]=num[i+1];
          num[i+1]=temp;
          intercambio=true;
         }
         }
         --v;
     }while(intercambio);
     return num; 
}
orden_Burbuja(num1)

//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
