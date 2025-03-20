const numArr = [6, 37, 10, 36, 1];

function getSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(getSum(numArr));
