function bubbleSort(nums){
    let temp = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-1;j++){
            temp = nums[j];
            if (nums[j]>nums[j+1]){
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}

console.log(bubbleSort([12,9,15, 6, 7, 3]));

//6,9,7,3 i=0,j=0,temp=6
//6,7,9,3 i=0,j=1
//6,7,3,9 i=0,j=2

//6,7,3,9 i=1,j=0
//6,3,7,9 i=1,j=1
//6,3,7,9 i=1,j=2

//3,6,7,9 i=2,j=0
//3,6,7,9 i=2,j=1
//3,6,7,9 i=2,j=2

