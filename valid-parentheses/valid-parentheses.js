var isValid = function(s) {
    var map = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }
    
    var stack = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === "["){
            stack.push(s[i]);
        }
        else{
            if(stack[stack.length-1] === map[s[i]]){
            stack.pop();
         }
            else return false;
        }
    }
    
    return stack.length === 0 ? true : false
    
}