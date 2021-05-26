var findingUsersActiveMinutes = function(logs, k) {
    let userLogs = {};
    let usersActions = [];
    
    for (let i = 0; i < k; i++) {
        usersActions.push(0);
    };
    
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i];
        if (userLogs[log[0]]) {
            userLogs[log[0]][log[1]] = true;
        } else {
            userLogs[log[0]] = {};
            userLogs[log[0]][log[1]] = true;
        }
    }
    
    for (let user in userLogs) {
        let uniqueActions = Object.keys(userLogs[user]);
        if (uniqueActions.length > 0) usersActions[uniqueActions.length - 1]++
    }
    return usersActions;
};