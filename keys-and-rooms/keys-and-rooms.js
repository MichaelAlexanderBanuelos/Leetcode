const canVisitAllRooms = function(rooms) {
    var roomsToVisit = [rooms[0]];
    var visited = [true];

    while(roomsToVisit.length > 0) {
        let room = roomsToVisit.pop();
        for(let i = 0; i < room.length; i++){
            let key = room[i];
            if (!visited[key]) {
                roomsToVisit.unshift(rooms[key]);
            }
            visited[key] = true;
        }
    }
    
    const visitedCount = visited.filter((room) => !!room).length;
    return rooms.length === visitedCount;
};