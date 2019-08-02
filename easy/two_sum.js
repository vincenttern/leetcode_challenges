var twoSum = (nums, target) => {
    const dict = {};
    let input, diff;
    for (var i = 0; i < nums.length; i++) {
        input = nums[i];
        diff = target - input;
        
        if (diff in dict) {
            return [dict[diff], i];
        }
        dict[input] = i;
    }
    return null;
}

twoSum([2, 7, 11, 15], 9);