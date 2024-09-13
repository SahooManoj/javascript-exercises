const fibonacci = function(n) {
    let num = parseInt(n);
    let firstprec = 0;
    let secondPrec = 1;
    if (num === 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    for (i = 2; i <= num; i++) {
        let current = firstprec + secondPrec;
        firstprec = secondPrec;
        secondPrec = current;
    }
    return secondPrec;
};

// Do not edit below this line
module.exports = fibonacci;
