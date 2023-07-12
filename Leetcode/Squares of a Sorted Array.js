function sortedSquare(nums){
    for(let i=0;i<nums.length;i++)
        nums[i] = nums[i] * nums[i];

    let currentNums = nums[0];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            currentNums = nums[i];
            if (currentNums > nums[j]) {
                nums[i] = nums[j];
                nums[j] = currentNums;
            }
        }
    }
    
    return nums;
}

console.log(sortedSquare([-4, -1, 0, 3, 10]));