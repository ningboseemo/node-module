var add = require('./math').add;
exports.increment = function(val) {
    return add(val, 1);
};
exports.moduleA = module