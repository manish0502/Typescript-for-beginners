function add(n1:number, n2:number){
    return n1 + n2;
}

function printResult(num:number):void {
    console.log('Result is :' +num)

}
printResult(add(2,3));



// defing function with callback function

function addValues(a:number, b:number , cb:(a:number)=>void) {

    const result =a + b ;
    cb(result);


}

addValues(10,20 ,(result)=>{
    console.log(result);
})


// Defing function types and return values
// which means it can take any function ehich takes 2 parameters and return number as result
// the function parameters need not be to the same name as its named in the actual function 

let combineValues: (a:number, b:number) => number

combineValues =add; // taking add function  

console.log(combineValues(8,8)); // Printing the result as a function