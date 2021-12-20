function convertToF(num){
    return Number(num) * 1.8 + 32;
};

function convertToK(num){
    return Number(num) + 273.15;
};

module.exports = {
    fCtF: convertToF,
    fCtK: convertToK
};