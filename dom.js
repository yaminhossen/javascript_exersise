// // let a = 22;
// // console.log(a ==22 ? 'this is under 25': 'this is uper 20');
// // const as = async ()=>{
// // await 
// // }
// const resolveAfterDelay = (delay) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Resolved');
//       }, delay);
//     });
//   };
  
//   const getData = async () => {
//     console.log('Fetching data...');
  
//     try {
//       const result = resolveAfterDelay(2000);
//       console.log('Data:', result);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };
  
//   getData();
  
// const data = `{"name": "yamin","age":"33"}`
// const data2 = {name:'dkfjdsk'}
// const nedata = JSON.parse(data);
// const nedata2 = JSON.stringify(data2);
// console.log(nedata2)

// try {
//     console.log(13/a);
// } catch(error){
//     console.log(error)
// }
function divide(a, b) {
    if (b === 0) {
      throw new Error("Divide by zero error");
    }
    return a / b;
  }
  
  try {
    const result = divide(10, 33);
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  divide(10,34)