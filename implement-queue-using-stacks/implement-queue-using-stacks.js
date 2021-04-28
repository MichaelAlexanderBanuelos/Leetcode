class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }
    push(val) {
        this.size++;
        this.storage[this.size] = val;
    };
    pop() {
        let val = this.storage[this.size];
        this.size--;
        return val;
    }
    peek() {
      return this.storage[this.size];
    }
}



var MyQueue = function() {
    this.storageStack = new Stack();
    this.deQueueStack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storageStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.deQueueStack.size) return this.deQueueStack.pop();
    else {
        while (this.storageStack.size) {
            let val = this.storageStack.pop();
            this.deQueueStack.push(val);
        }
        return this.deQueueStack.pop();
    }
};
MyQueue.prototype.empty = function() {
    if (this.storageStack.size || this.deQueueStack.size) return false;
    else return true;
};
MyQueue.prototype.peek = function() {
    if (this.deQueueStack.size) {
      return this.deQueueStack.peek();
    } else {
      while (this.storageStack.size) {
        let val = this.storageStack.pop();
        this.deQueueStack.push(val);
      }
      return this.deQueueStack.peek();
    }
    return -1;
};