var consoleParams = require('commander'),
    nodemailer = require('nodemailer'),
    log = require('./libs/log')(module),
    file = require('./libs/file');

consoleParams
    .version('0.0.1')
    .option('-u, --user <username> or Environment Variable', 'SMTP user (only GMAIL SMTP)')
    .option('-p, --pass <password> or Environment Variable', "SMTP password (only GMAIL SMTP)")
    .option('-t, --to <email>', "recipient (can be several values - <email>, <email>, ...)")
    .option('-s, --subject <subject>', 'add subject to e-mail')
    .option('-f, --file <path>', 'absolute path to file which you want to send')
    .parse(process.argv);

if (consoleParams.options.length) {

    var fileArg            = consoleParams.file,
        userArg            = consoleParams.user         || process.env.SMTP_USER,
        passArg            = consoleParams.pass         || process.env.SMTP_PASS,
        toArg              = consoleParams.to,
        subjectArg         = consoleParams.subject      || '(No subject)',
        fileContents       = file.readFile(fileArg);

    if (userArg && passArg && toArg && fileContents) {

        nodemailer
            .createTransport({
                service: 'Gmail',
                auth: {
                    user: userArg,
                    pass: passArg
                }
            })
            .sendMail({
                from: userArg,
                to: toArg,
                subject: subjectArg,
                html: fileContents
            }, function(err, inf) {
                if (err) {
                    log.error(err);
                } else {
                    log.info('Message sent:', inf.response);
                }
            });
    }

} else {
    consoleParams.help();
}