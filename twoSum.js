// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
    // hardcoded works for this case
    // if (nums[0] + nums[1] === target){
    //     return [nums.indexOf(nums[0]), nums.indexOf(nums[1])];
    // }
let indices = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                // push returns length
                indices.push(i, j);
                return indices;
            } 
        }
    }
};

console.log(twoSum([2, 3, 8, 1], 9))