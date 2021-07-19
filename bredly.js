var pick = function (list) {
    if (list === void 0) { list = []; }
    return list[Math.floor(Math.random() * list.length)];
};
var parse = function (template, dictionary) {
    if (template === void 0) { template = ''; }
    if (dictionary === void 0) { dictionary = {}; }
    // find all replacements
    var replacements = template.match(/\$[a-zA-Z0-9]*/) || [];
    // replace them with the coresponding entries in dictionary
    var output = template;
    replacements.forEach(function (key) {
        if (key in dictionary) {
            var option = parse(pick(dictionary[key]), dictionary);
            output = output.replace(key, option);
        }
    });
    return output;
};
export var compose = function (dictionary, entryPoint) {
    if (dictionary === void 0) { dictionary = {}; }
    return parse(pick(dictionary[entryPoint]), dictionary);
};
