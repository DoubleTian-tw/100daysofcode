function returnConsecutive1MaxNumber(array) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < array.length; i++) {
        current = (array[i] === 0) ? 0 : current + 1;

        max = (max < current) ? current : max;
    }
    return max;
}

console.log(returnConsecutive1MaxNumber([1, 0, 1, 1, 0, 1]));
// console.log(returnConsecutive1MaxNumber([1,0,1,1,1]));
// console.log(returnConsecutive1MaxNumber([1,0,1]));
// console.log(returnConsecutive1MaxNumber([1,0,1,0,1,1]));




