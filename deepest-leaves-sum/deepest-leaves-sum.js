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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let maxDepth = 0;
    let sum = 0;
   
    const findDepth = (node, depth) => {
        if (!node) {
            return maxDepth = Math.max(maxDepth, depth);
        }
        depth++
        findDepth(node.left, depth);
        findDepth(node.right, depth);
    }
    
    const addLeaves = (node, depth) => {
        depth++;
        if (!node) {
            return;
        }
        if (depth === maxDepth) {
            return sum += node.val;
        }
        addLeaves(node.left, depth);
        addLeaves(node.right, depth);
    }
    findDepth(root, 0);
    addLeaves(root, 0);
    
    return sum;
};