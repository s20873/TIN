var second = function(arr){
    arr = arr.sort((a, b) => a-b);
    if(arr.length < 3){
        return "Array does not have 2nd lowest and greatest numbers";
    }
    else{
        return arr[1] + "; " + arr[arr.length-2];
    }
};

console.log(second([1, 2, 3, 4, 5, 7, 10, 0]));
console.log(second([1, 2]));