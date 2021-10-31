var amountTocoins = function(n, arr){
    for(var i = 0; i < arr.length; i++){
        var numb = Math.floor(n/arr[i]);
        for(var j = 0; j < numb; j++){
            console.log(arr[i]);
        }
        n = n - (numb * arr[i]);
    }
    return "The rest is " + n;
};

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));