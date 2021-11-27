document.getElementById("submit").addEventListener("click", () => {
    var fname = document.getElementById("fname").value;
    var snumber = document.getElementById("snumber").value;

    if (fname != "" && snumber != "") {

        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        var newText = document.createTextNode(fname);
        cell1.appendChild(newText);
        var number = document.createTextNode(snumber);
        cell2.appendChild(number);
    }
});
