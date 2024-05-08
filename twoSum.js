// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
    // hardcoded works for this case
    // if (nums[0] + nums[1] === target){
    //     return [nums.indexOf(nums[0]), nums.indexOf(nums[1])];
    // }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (target - nums[i] === nums[j]) {
                return [nums.indexOf(nums[i]), nums.indexOf(nums[j])]
            } 
        }
    }
};

console.log(twoSum([3, 2, 4], 6))