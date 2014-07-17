mail-sender
===========

Simple console tool for sending HTML e-mails.

#### Install:

```
    node i
```


#### Parameters:
```
    -h, --help               output usage information
    -V, --version            output the version number
    -u, --user <username>    SMTP user (only GMAIL SMTP)
    -p, --pass <password>    SMTP password (only GMAIL SMTP)
    -t, --to <email>         Recipient (can be several - <email>, <email>)
    -s, --subject <subject>  Add subject to e-mail
    -f, --file <path>        Path to file which you want send
```

#### Basic usage:
```
node app.js -u email@domain.com -p SuPeRsEcReTpAsSwOrD -t email@domain.com -s "Interesting subject" -f /path/to/html/file
```


