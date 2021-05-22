/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let purchased = 0;
    costs = costs.sort((a, b) => a - b);
    for (let i = 0; i < costs.length; i++) {
        let curr = costs[i];
        if (coins - curr >= 0) {
            purchased++;
            coins -= curr;
        }
    }
    return purchased;
};