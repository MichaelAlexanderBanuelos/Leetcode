/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // we can dfs through the graph and if we ever reach the last item, then add that list to our result
    // create a variable to store our output
    // create a variable that stores our current path
    // traverse through the graph
    // whenever the input is 4, return and add our list to the result
    
    let result = [];
    
    const dfs = (vertex, path) => {
        if (vertex === graph.length - 1) {
            return result.push(path.slice());
        }
        let edges = graph[vertex];
        for (let i = 0; i < edges.length; i++) {
            path.push(edges[i])
            dfs(edges[i], path);
            path.pop();
        }

    }
    dfs(0, [0]);
    return result;
};