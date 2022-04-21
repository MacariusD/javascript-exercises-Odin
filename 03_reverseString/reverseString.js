const reverseString = function(rSeq) {
    // Optimal Solution
    // return Array.from(rSeq).reverse().join('');

    let seqArray = Array.from(rSeq);
    let fSeq = '';
    for (let i = seqArray.length; i > 0; i--) {
        fSeq += seqArray[i-1];
    };
    return fSeq;
};

// Do not edit below this line
module.exports = reverseString;
