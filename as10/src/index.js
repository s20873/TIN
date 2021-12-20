let _ = require('lodash');

let {fKtF, fKtC} = require('./fromKel.js');
let {fFtK, fFtC} = require('./fromFah.js');
let {fCtF, fCtK} = require('./fromCel.js');

let {toK, toM} = require('./dist.js');

document.getElementById("convertTemp").addEventListener("click", () => {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const num = document.getElementById("temp").value;
    let result;

    switch(from){
        case "cel": switch(to) {
            case "cel" : result = num; break;
            case "kel" : result = fCtK(num); break;
            case "fah" : result = fCtF(num); break;
            default : result = "what?"; 
        } break;
        case "kel" : switch(to){
            case "cel" : result = fKtC(num); break;
            case "kel" : result = num; break;
            case "fah" : result = fKtF(num); break;
            default : result = "what?"; 
        } break;
        case "fah": switch(to) {
            case "cel" : result = fFtC(num); break;
            case "kel" : result = fFtK(num); break;
            case "fah" : result = num; break;
            default : result = "what?"; 
        } break;
        default: result = "what?";
    }
    document.getElementById("tempResult").innerHTML = `Temp: ${result}`;
});


document.getElementById("convertDist").addEventListener("click", () => {

    const to = document.getElementById("dis").value;
    const num = document.getElementById("dist").value;
    let result;

    switch(to){
        case "kil" : result = toK(num); break;
        case "mil" : result = toM(num); break;
        default: result = "what?";
    }
    document.getElementById("distResult").innerHTML = `Dist: ${result}`;
});