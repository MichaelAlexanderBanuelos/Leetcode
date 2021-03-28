/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // loop through linked list
    // push values to new array
    // loop through linked list again, this time reassign values from array in reverse order
    
    let values = [];
    let dummy = new ListNode(null, head)
    while (dummy.next !== null) {
        values.push(dummy.next.val);
        dummy = dummy.next
    }
    dummy = new ListNode(null, head);
    let end = values.length - 1;
    while (dummy.next !== null) {
        dummy.next.val = values[end];
        dummy = dummy.next
        end--;
    }
    return head
};