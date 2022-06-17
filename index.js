// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const numMatch = (target - array[i])
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === numMatch) {
//         return true
//       }
//     }
//   }
//   return false
// }

function hasTargetSum(array, target){
  const seenNumbers = {}
    for (let i = 0; i < array.length; i++){
      const complement = target - array[i]
      if (seenNumbers[complement]) return true
      seenNumbers[array[i]] = true
      
    
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  Run: 0(n^2)
  Space: O(n)
*/

/* 
  Create an object that keeps track of the numbers already seen
  Iterate through each number in array
  for current number, indentify if number matches for target (nummatch - array[i])
  check if any key on our object is the matching number
  If so, return true
  Otherwise, add that number to object

  If I reach the end of array, return false


  hasTargetSum function
  seenNumbers = {
    1: true
    2: true
    3: true
  }
*/

/*
  Create a function that takes in two arguments (array, target)
  Iterate through the array adding two numbers together seeing if they equal the target sum
  For example [1, 2, 3, 4, 5] can have a target of 7 because 2 + 5 = 7
  If the two numbers added together equal the target sum return true
  return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
