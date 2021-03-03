type Combinable = number | string;  // types Aliases

type ConvertionDescriptor = 'as-number'| 'as-text'  //Type Aliases

function combine(input1: Combinable, input2: Combinable , resultCoversion:ConvertionDescriptor){

let result ;
if(typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion==='as-number')
 {
    result = +input1 + +input2;
   }
 else {
     result =input1.toString() + input2.toString();
 }
  return result

}


// @taking number as parameters

const combinedAges=combine(13,26,'as-number');
console.log(combinedAges);


const combinedStringAges=combine('13','26','as-number');
console.log(combinedStringAges);


// @ taking String as parameters
const combineNames =combine('Manish' ,'Ranjeet' ,'as-text')
console.log(combineNames);