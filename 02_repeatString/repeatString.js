const repeatString = function(rSeq, xNum) {
    let fSeq = ''
    if (xNum < 0) {
        fSeq = 'ERROR'
        return fSeq;
    } else {
        for (let i = 0; i < xNum; i++) {
            fSeq = fSeq + rSeq;
        };
        return fSeq;
    };
};

// Do not edit below this line
module.exports = repeatString;
