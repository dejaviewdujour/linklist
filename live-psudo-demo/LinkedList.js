function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue === undefined)
      return new Error("Must provide value for the first node.");
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  appendToTail(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return this.tail;
  }

  removeHead() {
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  findNode(value) {
    function inner(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.next === null) {
        return `No node with value: ${value} found.`;
      } else {
        return inner(currentNode.next);
      }
    }
    return inner(this.head);
  }

  updateNode(oldValue, newValue) {
    function inner(currentNode) {
      if (currentNode.value === oldValue) {
        currentNode.value = newValue;
      } else if (currentNode.next === null) {
        return `No node with value: ${value} found.`;
      } else {
        return inner(currentNode.next);
      }
    }
    inner(this.head);
  }

  print() {
    let result = [];
    function inner(currentNode) {
      result.push(currentNode.value);
      if (currentNode.next !== null) {
        //do something
        inner(currentNode.next);
      }
    }
    inner(this.head);
    let holder = "";
    for (let i = 0; i < result.length; i++) {
      holder += `[ ${result[i]} ]->`;
    }
    holder = holder.substr(0, holder.length - 2);
    console.log("\nChoo choooooooo!!!!! \t", holder, "\n");
  }
}

module.exports = LinkedList;
