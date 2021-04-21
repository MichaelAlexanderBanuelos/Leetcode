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
 * @return {string[]}
 */



var binaryTreePaths = function(root) {
    let output = [];

    const dfs = (root, currentPath) => {
    if (root === null) {
        return 
    }
    if (root.left === null && root.right === null) {
        currentPath += root.val;
        return output.push(currentPath)
    }
    dfs(root.left, currentPath + root.val + '->')
    dfs(root.right, currentPath + root.val + '->')
}
    dfs(root, "")
    return output;
};
