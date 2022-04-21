const reverseString = function(rSeq) {
    let seqArray = Array.from(rSeq);
    let fSeq = '';
    for (let i = seqArray.length; i > 0; i--) {
        fSeq += seqArray[i-1];
    };
    return fSeq;
};

// Do not edit below this line
module.exports = reverseString;
