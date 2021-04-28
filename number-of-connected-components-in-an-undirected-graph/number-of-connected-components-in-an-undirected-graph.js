var countComponents = function(n, edges) {
    let count = 0;
    let seen = {};
    let graph = {};
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        if (!graph[u]) graph[u] = [v];
        else graph[u].push(v);
        if (!graph[v]) graph[v] = [u];
        else graph[v].push(u)
    }
    
    const findEdges = (node) => {
        if (seen[node]) return;
        else seen[node] = true;
        let edges = graph[node];
        if (edges) {
          for (let i = 0; i < edges.length; i++) {
            findEdges(edges[i]);
          }
        }
        
    }
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            count++;
            findEdges(i);
        }
    }
    return count;
};