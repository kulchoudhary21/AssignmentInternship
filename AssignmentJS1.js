// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
   let max=array[0];
  let x;
 // console.log(array[0])
  for(x in array)
  {
      if(max<=array[x])
      {
        max=array[x];
      }
  }
  let second_max;
  if(max==array[0])
  {
    second_max=array[1];
  }
  else
  {
    second_max=array[0];
  }
  for(x in array)
    {
      if(second_max<array[x]&&max!=array[x])
        {
          second_max=array[x];
        }
    }
  console.log(second_max)
  return second_max;
}


// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    var object = new Object();
for (let x = 0; x < string.length; x++) {
  if(95<=string[x].codePointAt() && 122>=string[x].codePointAt())
  {
  let count = 0;
  for (let y = 0; y < string.length; y++) {
    if (string[x] == string[y])
      count++;
  }
  object[string[x]] = count;
}
}
return object;
}



// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let obj=unflatObject;
  let final = {};
  for (let x in obj) {
    if (typeof obj[x] == "object") {
      const temp = flatten(obj[x]);
      for (let y in temp) {
        final[x + "." + y] = temp[y];
      }
    } else {
      final[x] = obj[x];
    }
  }
  return final;
  
  
}



// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}


//Problem 4
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
function animal(array) {
    let obj = new Object();
    for (let x in array) {
      let count = 0;
      for (let y in array) {
        if (array[x] == array[y]) count++;
      }
      obj[array[x]] = count;
    }
    return obj;
  }
  let array = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
  console.log(animal(array));
  