function removeDuplicates(arr) {
  if (Array.isArray(arr) === false) {
    return "Invalid";
  }
  console.log(arr);
  let uniqueValue = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let item = arr[i];
    if (!uniqueValue.includes(item)) {
      uniqueValue.push(item);
    }
  }
  return uniqueValue;
}
console.log(removeDuplicates([1, 2, 33, 44, 33, 44]));
