var maxDepth = function(root) {
    // create variable to store maximum length
    // traverse tree
    // increment until we reach leaf
    // once we hit leaf, compare value
    // recurse until all routes have been exhausted
    // return max length
    let maxDepth = 0;
    if (root === null) {
      return maxDepth;
    }
    const dfs = (currentRoot, currentDepth) => {
      if (currentRoot === null) {
        maxDepth = Math.max(currentDepth, maxDepth);
        return;
      }
      currentDepth++
      dfs(currentRoot.left, currentDepth)
      dfs(currentRoot.right, currentDepth)
    }
    dfs(root, 0)
  return maxDepth;
};