document.getElementById("convertToF").addEventListener("click", () => {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = celsius * 1.8 + 32;
  document.getElementById("celsius").value = fahrenheit;
});

document.getElementById("convertToC").addEventListener("click", () => {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("fahrenheit").value = celsius;
  });
