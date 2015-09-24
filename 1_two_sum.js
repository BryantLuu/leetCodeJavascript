/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    answer = {};
    for (var i in nums){
        // console.log(target-nums[i]);
        key = target-nums[i];
        if (answer[nums[i]] === undefined){
            answer[key] = parseInt(i);
        } else {
            return [answer[nums[i]]+1,parseInt(i)+1]
        }
    }
};