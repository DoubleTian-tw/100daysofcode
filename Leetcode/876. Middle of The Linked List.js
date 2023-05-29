//建構函式
function listNode(val = null, next = null){
    this.val = val === null ? 0 : val;
    this.next = next === null ? null : next;
}
//一般函式
function sayHi(){
    return 0;
}
// 上下皆可用
//  function middleNode(node){
var middleNode = function(node){
    let worknode = node;
    let middlePos = 0;
    while(worknode !== null){
        worknode = worknode.next;
        middlePos++;
    }
    middlePos = Math.floor(middlePos /2);

    worknode = node;
    let currentPos = 0;
    while(currentPos < middlePos){
        worknode = worknode.next;
        currentPos++;    
    }
    return worknode;
}
var twoNode = function(node){
    let middle = node;
    let end = node;
    while(end !== null && end.next!== null){
        middle = middle.next;
        end = end.next.next;
    }
    return middle;
}
const node1 = new listNode(1);
const node2 = new listNode(2);
const node3 = new listNode(3);
const node4 = new listNode(4);
const node5 = new listNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// console.log(middleNode(node1));
console.log(twoNode(node1));
// console.log(sayHi());

