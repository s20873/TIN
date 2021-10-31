var alphabet = function(str){
    var str1 = str.split("").sort().join("");
    return str1;
};

console.log(alphabet("webmaster"));