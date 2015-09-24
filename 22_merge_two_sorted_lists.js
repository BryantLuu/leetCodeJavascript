/**

beat 37.70% of javascript submissions

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null){
        return l2;    
    }
    if (l2 === null){
        return l1;
    }
    
    if (l1.val < l2.val){
        var list = new ListNode(l1.val);
        l1 = l1.next;
    } else  {
        var list = new ListNode(l2.val);
        l2 = l2.next;
    }
    pointer = list;
    while (l1 && l2) {
        if (l1.val < l2.val){
            pointer.next = l1;
            l1= l1.next;
            pointer = pointer.next
        } else {
            pointer.next = l2;
            l2 = l2.next;
            pointer = pointer.next
        }
    }
    if (l1){
        pointer.next = l1;
    } else {
        pointer.next = l2;
    }
    return list;
};