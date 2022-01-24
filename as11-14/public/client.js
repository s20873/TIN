let virInterval;
let timerInterval;
let total = 0, actual = 0;

document.onload = submitListener();

document.addEventListener("click", listener);

function listener(event) {

    switch (event.target.id) {
        case "stop":
            stopListener(event);
            break;
        case "virus":
            virusListener(event);
            break;
        default:
            backListener(event);
    };
};


function submitListener() {

    let time = 30;

    virInterval = setInterval(virus, 1600);
    timerInterval = setInterval(function () {
        document.getElementById("timer").innerHTML = `Time left: ${time--}`;
        if (time === -1) {
            clearInterval(virInterval);
            finish();
        }
    }, 1000);
};

function virusListener(event) {
    let element = event.target;
    if (element.id == "virus") {
        actual++;
        document.getElementById("virus").remove();
        changeBackground("#88ff0025");
    }
};

function backListener(event) {
    let element = event.target;
    if (element.id == "background") {
        changeBackground("#ff350312");
    }
};

function stopListener(event) {
    clearInterval(virInterval);
    setTimeout(finish, 1000);
};



function changeBackground(color) {
    document.getElementById("background").setAttribute("style", `box-shadow: 0px 0px 20px 5px ${color}`);
    setTimeout(function () {
        document.getElementById("background").setAttribute("style", "box-shadow: none");
    }, 400);
};

function virus() {
    createVirus();
    setTimeout(function () {
        let vir = document.getElementById("virus");
        if (vir) {
            vir.remove();
        }
    }, 1400);
};

function createVirus() {
    total++;
    let img = document.createElement("img");
    img.src = "virus.png";

    let left = randomInt(0, 360);
    let bottom = randomInt(-181, 181);


    img.setAttribute("id", "virus");
    img.setAttribute("alt", "virus");
    img.setAttribute("width", 40);
    img.setAttribute("height", 38);
    img.setAttribute("style", `position: relative; left: ${left}px; bottom: ${bottom}px;`);
    let background = document.getElementById("background");
    background.appendChild(img);
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function finish() {
    clearInterval(timerInterval);
    setTimeout(again, 2000);
};

function again() {

    let score = actual / total * 100;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var h2 = document.createElement("h2");
            h2.setAttribute("class", "background content");
            h2.innerHTML = `${JSON.parse(xhr.responseText).result}`;
            document.getElementById("background").appendChild(h2);
        };
    };

    xhr.open('GET', `http://localhost:3000/score?result=${score}`, true);
    xhr.send();

    var form = document.createElement("form");
    form.setAttribute("action", "http://localhost:3000/game");
    form.setAttribute("method", "get");
    var input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Again");
    input.setAttribute("id", "submit");
    input.setAttribute("class", "button");
    form.appendChild(input);
    document.getElementById("buttons").appendChild(form);
}
