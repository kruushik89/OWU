module.exports = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Values must be a number')
    }
    return a + b
};
