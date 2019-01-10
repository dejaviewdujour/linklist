//run tests
const LinkedList = require("./LinkedList");

let list = new LinkedList(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);
list.appendToTail(0);

list.print();

console.log("Now the people should get in the train\n");

list.updateNode(0, 55);
list.updateNode(0, 59);
list.updateNode(0, 66);
list.updateNode(0, 54);
list.updateNode(0, 53);
list.updateNode(0, 49);
list.updateNode(0, 2);
list.updateNode(0, 60);
list.updateNode(0, 70);

list.print();

console.log("Rush hour hits! DON'T BE LATE TO CODE CHRYSALIS\n");

list.updateNode(55, 59);
list.updateNode(59, 65);
list.updateNode(66, 69);
list.updateNode(54, 56);
list.updateNode(53, 58);
list.updateNode(49, 56);
//list.updateNode(2, 2);
list.updateNode(60, 62);
list.updateNode(70, 73);

list.print();

console.log("What is going on in THAT train car???\n");

list.removeHead();

list.print();

console.log("What is going on in THAT train car???\n");
