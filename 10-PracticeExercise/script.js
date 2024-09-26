//challenge 1

const marks = [85, 97, 44, 37, 76, 60];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(averageMarks);  

//challenge 2
const prices = [250, 645, 300, 900, 50];
const finalPrices = prices.map(price => price - (price * 0.1));
console.log(finalPrices);  

//challenge 3

//Remove the first company from the array
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);

//Remove Uber & Add Ola in its place
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
    companies.splice(uberIndex, 1, "Ola");
}
console.log(companies); 

//Add Amazon at the end
companies.push("Amazon");
console.log(companies); 