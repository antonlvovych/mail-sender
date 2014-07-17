var consoleParams = require('commander'),
    nodemailer = require('nodemailer'),
    log = require('./libs/log')(module),
    fs = require('fs'),
    path = require('path');

consoleParams
    .version('0.0.1')
    .option('-u, --user <username>', 'SMTP user (only GMAIL SMTP)')
    .option('-p, --pass <password>', "SMTP password (only GMAIL SMTP)")
    .option('-t, --to <email>', "Recipient (can be several)")
    .option('-s, --subject <subject>', 'Add subject to e-mail')
    .option('-f, --file <path>', 'Path to file which you want send')
    .parse(process.argv);

if (consoleParams.file && consoleParams.user && consoleParams.pass && consoleParams.to) {

    var file            = consoleParams.file,
        user            = consoleParams.user,
        pass            = consoleParams.pass,
        to              = consoleParams.to,
        subject         = (consoleParams.subject || '(No subject)'),
        fileContents;

    if (!fs.existsSync(file)) {
        log.error('No', file, 'provided, exiting');
        return -1;
    }

    fileContents = (fs.readFileSync(file, 'utf8')).toString();

    nodemailer
        .createTransport({
            service: 'Gmail',
            auth: {
                user: user,
                pass: pass
            }
        })
        .sendMail({
            from: user,
            to: to,
            subject: subject,
            html: fileContents
        }, function(err, inf) {
            if (err) {
                log.error(err);
            } else {
                log.info('Message sent', inf.response);
            }
        });

}

else if (!consoleParams.args.length) {
    consoleParams.help();
}