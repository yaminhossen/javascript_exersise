const nums = [3, 5, 2, 1, 33, 44, 22];

//  console.log(nums.sort(function(a,b){
//     return a-b;
//  }));

// let name = 'I love bangladesh';

//  console.log(Array.from(name));
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function countV(name) {
    let c = 0;
    const letters = Array.from(name);
    // console.log(letters);
   letters.forEach((value) =>{
    if(vowels.includes(value)){
       c++;
    }
   })
   return c;

}
// console.log(countV('I love bangladesh'));

 summ(1,2,3);
 function summ() {
   console.log(arguments)
 }
//  summ();
function curryAdd(a) {
   return function (b) {
     return function (c) {
       return a + b + c;
     };
   };
 }
 
 // Using the curried function
 let result = curryAdd(2)(3)(4);
 console.log(result);

 let aaa = [3,4,5,6,4,5,3];
 let cc =new Set(aaa);
 console.log(cc)