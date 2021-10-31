var factorial = function(n) {
    if (n <= 1) { 
      return 1;
    }
    return n * factorial(n-1);
  };
  
  console.log(factorial(5));
  
function f(n) {
  var res = 1;
  for (var i = 1; i <= n; i++) {
  res = res * i;
  }
  return res;
}

console.log(f(2));