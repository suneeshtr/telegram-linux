# Telegram Bot #
Easily create a Telegram bot in node.js with the new bot api to lock your system remotely

## Installation ##

```
git clone https://github.com/suneeshtr/telegram-linux.git
cd telegram-linux
npm install
```

## Running ##

* Get your bot token from [@botfather](https://telegram.me/botfather). This will be TG_TOKEN
* Install slock ```sudo apt-get install slock```
* Creating a service file ```sudo nano /etc/systemd/system/nodeserver.service```

```

[Unit]

Description=Node.js Example Server
After=network.target       # Requires the mysql service to run first

[Service]
ExecStart=/usr/bin/node /home/<user>/telegram-linux/tg.js
# Required on some systems
WorkingDirectory=/home/<user>/telegram-linux/
Restart=always
# Restart service after 10 seconds if node service crashes
RestartSec=10
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=nodejs-example
User=<username>
#Group=<alternate group>
Environment=DISPLAY=:0

[Install]
WantedBy=multi-user.target

```

* Enable the service 
```
systemctl enable nodeserver.service
```
* Start the service
```
systemctl start nodeserver.service
```
* Reload
```
systemctl daemon-reload
systemctl restart nodeserver.service
```
# For success login and login attempt failed messages 

in ```/etc/pam.d/common-auth```

```
# here are the per-package modules (the "Primary" block)
auth    [success=2 default=ignore]      pam_unix.so nullok_secure
auth    [default=ignore]                pam_exec.so seteuid /home/<user>/telegram-linux/fail.sh
# here's the fallback if no module succeeds
auth    requisite                       pam_deny.so
# prime the stack with a positive return value if there isn't one already;
# this avoids us returning an error just because nothing sets a success code
# since the modules above will each just jump around
auth    required                        pam_permit.so
# and here are more per-package modules (the "Additional" block)
# end of pam-auth-update config
auth optional  pam_exec.so /home/<user>/telegram-linux/success.sh

```

