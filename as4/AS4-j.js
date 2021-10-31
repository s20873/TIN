var binary = function(arr, l, r, n){
  
    var m = Math.floor((l+r)/2);
    if(l > r || r < l){
      return "The element is not found";
    }
    if(arr[m] < n){
      return binary(arr, m + 1, r, n);
    }
    if(arr[m] > n){
      return binary(arr, l, m - 1, n);
    }
    if(arr[m] === n){
      return "The element " + n + " is found with index " + m;
    }
};

var search = function(arr, n){
  return binary(arr, 0, arr.length-1, n);
}
console.log(search([1,2,3,4], 2));
console.log(search([1,2,3,4,5], 0));