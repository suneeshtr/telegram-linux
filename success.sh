#!/bin/bash

# dbus-monitor --session "type=signal,interface=com.canonical.Unity.Session,member=Unlocked" | 
# while read MSG; do
# LOCK_STAT=`echo $MSG | awk '{print $NF}'`
# if [[ "$LOCK_STAT" == "member=Unlocked" ]]; then
#     node /home/sunu/node-telegrambot/temp.js
# fi
# done
node /home/sunu/node-telegrambot/success.js