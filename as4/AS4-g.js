var type = function(arg){
    return "Type of " + arg + ": " + typeof(arg);
};

console.log(type("str"));
console.log(type(1));
console.log(type(true));