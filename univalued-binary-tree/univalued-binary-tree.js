/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    // if the root value of the tree is equal to every other value in the tree. its univalued
    // to check if its univalued we can just traverse thet tree and check at every node if its value is equal to the root value
    
    // check if tree is null or empty
    // if it is, return true
    // create queue
    // add root to the queue
    // if the current nodes left and right exist, add them to queue
    // check if current nodes value matches root value
    // if it does, do nothing, if it doesnt return false
    // if we reach the end without false, its univalued so we can return true
    
    if (root === null) {
        return true;
    }
    let queue = [];
    let currentNode;
    queue.push(root);
    while (queue.length) {
        currentNode = queue.shift();
        if (currentNode.val !== root.val) {
            return false;
        }
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return true;
};