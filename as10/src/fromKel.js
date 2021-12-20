function convertToF(num){
    return (Number(num) - 273.15) * 9/5 + 32;
};

function convertToC(num){
    return Number(num) - 273.15;
};

module.exports = {
    fKtF: convertToF,
    fKtC: convertToC
};
