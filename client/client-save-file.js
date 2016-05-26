Meteor.saveFile = function(blob, name, type, callback) {
    var fileReader = new FileReader(),
        method = 'readAsBinaryString',
        encoding = 'binary',
        type = type || 'binary';
    fileReader.onload = function(file) {
        Meteor.call('saveFile', file.srcElement.result, name, type, encoding, callback);
    }
    fileReader[method](blob);
};
