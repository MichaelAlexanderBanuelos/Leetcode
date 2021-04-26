/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // if there is a cycle then we can't complete the prereqs
    // build an adjacency list
    // dfs through the list, if we run into a node we're currently visiting, then its a cycle
    
    let graph = {};
    
    prerequisites.forEach(([course, prereq]) => {
        if (!graph[course]) graph[course] = [];
        graph[course].push(prereq);
    });
    const state = {};
    const dfs = (course) => {
        // 1 visiting
        // 2 visited
        // we found a cycle
        if (state[course] === 1) return true;
        // we saw this on another trip so no need to dfs
        if (state[course] === 2) return false;
        state[course] = 1;
        if (graph[course]) {
            for (const prereq of graph[course]) {
                if (dfs(prereq)) return true
            }
        }
        state[course] = 2;
    }
    for (const course of Object.keys(graph)) {
        if (dfs(course)) return false;
    }
    return true;
};