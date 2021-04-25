var levelOrder = function(root) {
    if (!root) return [];
    let result = [[root.val]];
    let queue = [];
    let children = [];
    queue.push(root)
    while (queue.length){
        const current = queue.shift();
        if (current.left) children.push(current.left);
        if (current.right) children.push(current.right);
        if (queue.length === 0 && children.length > 0) {
            queue = children.slice();
            result.push(queue.map(q => q.val));
            children = [];
        }
    }
    return result;
};