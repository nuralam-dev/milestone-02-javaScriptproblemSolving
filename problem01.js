function findLargestAndSmallest(array) {
  if (!Array.isArray(array) || array.length=== 0) {
    return "Invalid";
  }
  let largest = array[0];
  let smallest = array[0];

  for (let i = 0; i < array.length; i++) {
    largest = Math.max(largest , array[i])
    smallest = Math.min(smallest, array[i])
  }
  return` largest :${largest} smallest: ${smallest}`
}

let number = [45, 12, 89, 3, 67];
console.log(findLargestAndSmallest(number));

let numbers = [23, 33, 54, 56];
let high = Math.max(...numbers)
let small = Math.min(...numbers)
console.log(high, small)