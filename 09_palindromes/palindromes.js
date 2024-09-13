const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filterString = string
    .toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('');

    const reverseString = filterString.split('').reverse().join('');

    return filterString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
