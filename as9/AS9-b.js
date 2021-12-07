var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) { 
    document.getElementById("result").innerHTML = `${JSON.parse(xhr.responseText).result}`;
  };
};

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    xhr.open("POST", "http://localhost:3000/calculate", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
    JSON.stringify({
      num1: document.getElementById("num1").value,
      num2: document.getElementById("num2").value,
      operation: document.getElementById("operation").value
    })
  );
});