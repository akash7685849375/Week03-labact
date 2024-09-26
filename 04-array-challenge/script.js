const irani = [1,2,3,4,5];
//Adding 6 at the end
irani.push(6);
//Adding 0 at the beginning
irani.unshift(0)
//Reversing the array
irani.reverse()

console.log(irani);

//Challenge 2
const irani2 = [1,2,3,4,5];
const irani3 = [5,6,7,8,9,10];

// remove the last value of i2
irani2.pop()

//concatinating both arrays using spread operator
const rabinirani = [...irani2,...irani3]
rabinirani.flat()
console.log(rabinirani)