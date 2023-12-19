// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function findTwoSumIndices(numbers, target) {
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    firstNum = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      secondNum = numbers[j];
      console.log(firstNum + " + " + secondNum + " = " + target);
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
}

const result = findTwoSumIndices([2, 7, 11, 15], 9);
console.log(result);