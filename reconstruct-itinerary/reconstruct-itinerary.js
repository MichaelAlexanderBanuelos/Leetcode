var findItinerary = function(tickets, origin = 'JFK') {
  // we need to reconstruct an itenerary from a list of tickets
  // the itenerary needs to be in smallest lexical order meaning if two items from points are the same the smaller destination must appear first
  // we can construct a graph from the ticket list
  // sort the edges
  // dfs and add each item to a result array
   let result = [];
   let map = tickets.reduce((acc, [from, to]) => {
     if (acc[from]) acc[from].push(to);
     else acc[from] = [to];
     return acc;
   }, {});

   Object.values(map).forEach((to) => {
     to.sort();
   });

   const createList = (from) => {
     let destinations = map[from];
     while (destinations && destinations.length) {
       createList(destinations.shift());
     }
     result.unshift(from)
   }
   createList(origin)
   return result;
};