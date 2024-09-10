const sumAll = function(startRange, endRange) {
    if ((typeof startRange != 'number' || !Number.isInteger(startRange) || startRange < 0) ||
        (typeof endRange != 'number' || !Number.isInteger(endRange) || endRange < 0)) {
        return 'ERROR';
    }
    if (startRange > endRange) {
        [startRange, endRange] = [endRange, startRange];
    }
    let outputSum = 0;
    for (i = startRange; i <= endRange; i++) {
        outputSum += i;
    }
    return outputSum
};

// Do not edit below this line
module.exports = sumAll;
