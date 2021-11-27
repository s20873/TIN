window.addEventListener("load", function(){setTimeout("myFunction()", 5000)});

function myFunction(){
    const paragraph = document.createElement("p");
    var text = document.createTextNode("I am a new small paragraph");

    paragraph.appendChild(text);

    const div = this.document.getElementById("content");
    div.appendChild(paragraph);
}