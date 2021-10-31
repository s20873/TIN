var prime = function(n){
    if(n <= 1){
        return n + " is not prime";
    }
    for(var i = 2; i < n; i++){
        if(n%i == 0) {
            return n + " is not prime";
        }
    }
    return n + " is prime";
};

console.log(prime(1));