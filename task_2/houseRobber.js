function houseRobber(nums) {
  var maxKeyValue = {
    key: nums.indexOf(Math.max.apply(Math,nums)),
    value: Math.max.apply(Math,nums)
  };

  var maxSum = 0;
  for(var k in nums) {
    if(Math.abs(k - maxKeyValue.key) > 1) {
      var currentSum = nums[k] + maxKeyValue.value;
      maxSum = currentSum > maxSum ? currentSum : maxSum;
    }
  }

  return maxSum;
}

var nums = [1, 3, 1, 10, 100, 4];

console.warn('task 2');
console.log(houseRobber(nums));