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

function getArrOfLongerString(arr, num) {
  let longerStr = [];
  for (let chars of arr) {
    if (chars.length > num) {
      longerStr.push(chars);
    }
  }
  return longerStr;
}

console.log(getArrOfLongerString(strArr, 6));
