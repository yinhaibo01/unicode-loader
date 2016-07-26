
function to_ascii(str, identifier) {
    return str.replace(/[\u0080-\uffff]/g, function (ch) {
        var code = ch.charCodeAt(0).toString(16);
        if (code.length <= 2 && !identifier) {
            while (code.length < 2) code = "0" + code;
            return "\\x" + code;
        } else {
            while (code.length < 4) code = "0" + code;
            return "\\u" + code;
        }
    });
};

module.exports = function (source, inputSourceMap) {
    var callback = this.async();

    if (this.cacheable) {
        this.cacheable();
    }

    callback(null, to_ascii(source));
};