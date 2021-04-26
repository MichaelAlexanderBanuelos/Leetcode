var findOrder = function(numCourses, prerequisites) {
    const buildList = (course) => {
        if (state[course] === 1) return false;
        if (state[course] === 2) return true;
        state[course] = 1;

        let prereqs = courses[course];
        if (prereqs) {
            for (let course of prereqs) {
                if (!buildList(course)) return false;
            }
        }
        state[course] = 2;
        stack.push(course);
        return true;
    }
    const courses = prerequisites.reduce((acc, [course, prereq]) => {
        if (acc[course]) acc[course].push(prereq);
        else acc[course] = [prereq];
        return acc;
    }, {});
    let state = {};
    let stack = [];
    
  for (let c = 0; c < numCourses; c++) {
    if (!buildList(c)) {
      return [];
    }
  }
    

    return stack;
};