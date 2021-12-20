function convertToKil(num){
    return Number(num) * 1.609344;
};

function convertToMil(num){
    return Number(num) * 0.6214;
};

module.exports = {
    toK: convertToKil,
    toM: convertToMil
};