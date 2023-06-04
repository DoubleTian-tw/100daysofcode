function twoSum(nums, sum){
    let firstNum = 0;
    let secondNum = 0;
    let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            firstNum = nums[i];
            secondNum = nums[j];
            if (firstNum + secondNum === sum)
            {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    return result;

}

console.log(twoSum([2,11,8,14,15],29));