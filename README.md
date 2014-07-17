mail-sender
===========

Simple console tool for sending HTML e-mails.

#### Install:

```
    node install
```


#### Parameters:
```
    -h, --help                                     output usage information
    -V, --version                                  output the version number
    -u, --user <username> or Environment Variable  SMTP user (only GMAIL SMTP)
    -p, --pass <password> or Environment Variable  SMTP password (only GMAIL SMTP)
    -t, --to <email>                               recipient (can be several values - <email>, <email>, ...)
    -s, --subject <subject>                        add subject to e-mail
    -f, --file <path>                              absolute path to file which you want send
```


#### Environment Variables:

You can use environment variables for saving SMTP username and password.
```
    export SMTP_USER=email@domain.com
    export SMTP_PASS=SuPeRsEcReTpAsSwOrD
```



#### Basic usage:
```
    node app.js -u email@domain.com -p SuPeRsEcReTpAsSwOrD -t email@domain.com -s "Interesting subject" -f /path/to/html/file
```

#### Usage with environment variables:
```
    node app.js -t email@domain.com -s "Interesting subject" -f /path/to/html/file
```
