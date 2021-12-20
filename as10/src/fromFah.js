function convertToC(num){
    return (Number(num) - 32) * 5 / 9;
};

function convertToK(num){
    return 5 / 9 * Number(num) + 459.67;
};

module.exports = {
    fFtK: convertToK,
    fFtC: convertToC
};