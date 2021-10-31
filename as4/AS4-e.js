var longest = function(str){
    var str1 = str.split(" ").sort((a, b) => b.length - a.length)[0];
    return str1;
};

console.log(longest("What is the longest word?"));