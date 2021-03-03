"use strict";
function combine(input1, input2, resultCoversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// @taking number as parameters
var combinedAges = combine(13, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('13', '26', 'as-number');
console.log(combinedStringAges);
// @ taking String as parameters
var combineNames = combine('Manish', 'Ranjeet', 'as-text');
console.log(combineNames);
