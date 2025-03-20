const numArr = [6, 37, 10, 36, 1];

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

function getAverage(arr) {
  let average = 0;
  for (let num of arr) {
    average += num;
  }
  return average / arr.length;
}

console.log(getAverage(numArr));
