#!/bin/bash

# spin up backend servers
node s1.js &
node s2.js &
node s3.js &

# start HAProxy
haproxy -f haproxy.cfg
