/**

beat 80.58% of javascript submissions

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    
    hash = {
            '}' : '{',
            ']' : '[',
            ')' : '('
    }
    
    for (var i = 0; i < s.length; i++){
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            stack.push(s[i]);
        } else if (s[i] == '}' || s[i] == ']' || s[i] == ')') {
            if (stack.pop() != hash[s[i]]) {
                return false;
            }
        }
    }
    
    if (stack.length !== 0){
        return false;
    } else {
        return true;
    }

};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));