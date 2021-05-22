
var groupThePeople = function(groupSizes) {
    let groups = [];
    let map = {};
    for (let i = 0; i < groupSizes.length; i++) {
        let current = groupSizes[i];
        if (!map[current]) {
            map[current] = [i];
        } else {
            map[current].push(i)
        }
    }
    for (let group in map) {
        if (map[group].length === Number(group)) {
            groups.push(map[group])
        } else {
            let newBucket = [];
            while (map[group].length >= Number(group)) {
              console.log(map[group])
                if (newBucket.length === Number(group)) {
                    groups.push(newBucket);
                    newBucket = [];
                }
                if (map[group].length === Number(group)) {
                    groups.push(map[group]);
                    break;
                }
                let ele = map[group].shift();
                newBucket.push(ele);
            }
        }
    }
    return groups;
};