const numArr = [6, 37, 10, 36, 1];
const strArr = [
  "honda",
  "toyota",
  "subaru",
  "chevrolet",
  "mercedes-benz",
  "nissan",
  "mazda",
];

///// sum of array -------

// function getSum(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(getSum(numArr));

///// average of array ------

// function getAverage(arr) {
//   let average = 0;
//   for (let num of arr) {
//     average += num;
//   }
//   return average / arr.length;
// }

// console.log(getAverage(numArr));

////// Longest String -------

// function getLongestString(arr) {
//   let longestStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     let chars = arr[i];
//     if (chars.length > longestStr.length) {
//       longestStr = chars;
//     }
//   }
//   return longestStr;
// }

// console.log(getLongestString(strArr));

////// return the string that longer than given number -------

// function getArrOfLongerString(arr, num) {
//   let longerStr = [];
//   for (let chars of arr) {
//     if (chars.length > num) {
//       longerStr.push(chars);
//     }
//   }
//   return longerStr;
// }

// console.log(getArrOfLongerString(strArr, 6));

////////-------------------------------///////////
//////// Part 2: Thinking Methodically ///////////

const arrayOfObj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// // sorting by ages.

const sortByAges = [...arrayOfObj].sort(
  (a, b) => Number(a.age) - Number(b.age)
);
console.log("Sorted by age:", sortByAges);

// // removing entries over 50 years old

const underFifty = arrayOfObj.filter((entries) => Number(entries.age) <= 50);
console.log(underFifty);

// // changing occupation to job & age +1

const changedData = arrayOfObj.map((changedArr) => ({
  id: changedArr.id,
  name: changedArr.name,
  job: changedArr.occupation,
  age: Number(changedArr.age) + 1,
}));
console.log(changedData);

