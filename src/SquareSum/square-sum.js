const squareSum = num => num.map(el => el*el)
                            .reduce((acc, val) => acc + val);

module.exports = squareSum;