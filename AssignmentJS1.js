// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let max = array[0];
  let x;
  for (x in array) {
    if (max <= array[x]) max = array[x];
  }
  let second_max;
  if (max == array[0]) second_max = array[1];
  else second_max = array[0];
  for (x in array) {
    if (second_max < array[x] && max != array[x]) second_max = array[x];
  }
  return second_max;
}
// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(str) {
  var obj = {};
  for (let x = 0; x < str.length; x++) {
    if (95 <= str[x].codePointAt() && 122 >= str[x].codePointAt()) {
      let count = 1;
      if (obj[str[x]] >= 1) {
        count = obj[str[x]] + 1;
        obj[str[x]] = count;
      } else obj[str[x]] = count;
    }
  }
  return obj;
}
// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let obj = unflatObject;
  let final = {};
  for (let x in obj) {
    if (typeof obj[x] == "object") {
      const temp = flatten(obj[x]);
      for (let y in temp) {
        final[x + "." + y] = temp[y];
      }
    } else final[x] = obj[x];
  }
  return final;
}
// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
//let obj = {
//   flatJSON: false,
//   "i.am.not.so.flat": true,
//   "i.am.not.so.unflat": false,
//   "i.am.a": "tree",
//   "dates.0.day": 1,
//   "dates.1.day": 8947
// };
function unflatten(obj) {
  var result = {},
    temp,
    substrings,
    property,
    i;
  for (property in obj) {
    substrings = property.split(".");
    temp = result;
    for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
        if (isFinite(substrings[i])) {
          temp[substrings[i]] = [];
        } else {
          temp[substrings[i]] = {};
        }
      }
      temp = temp[substrings[i]];
    }
    temp[substrings[substrings.length - 1]] = obj[property];
  }
  return result;
}
console.log(unflatten(obj));
//Problem 5
// Create a program which takes
// Input: ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Gives
// Output:
// {
//   dog: 2,
//   chicken: 3,
//   cat: 1,
//   rabbit: 1
// }
function animal(arr) {
  let obj = {};
  for (let x = 0; x < arr.length; x++) {
    let count = 1;
    if (obj[arr[x]] >= 1) {
      count = obj[arr[x]] + 1;
      obj[arr[x]] = count;
    } else obj[arr[x]] = count;
  }
  return obj;
}
