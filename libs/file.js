var fs = require('fs'),
    log = require('./log')(module);

exports.readFile = function(file) {
    if (!fs.existsSync(file)) {
        log.error('No', file, 'provided, exiting');
        process.exit(-1);
    }

    return fs.readFileSync(file, 'utf8').toString();
}