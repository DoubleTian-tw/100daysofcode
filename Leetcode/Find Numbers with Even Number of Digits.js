function findEvenNumber(nums){
    let count_even = 0;
    for(let i=0;i<nums.length;i++){
        count_even =
            (nums[i].toString().length % 2 === 0) ? count_even + 1 : count_even;
        console.log(count_even);
    }
    return count_even;
}

console.log(findEvenNumber([12, 345, 2, 6, 7896]));