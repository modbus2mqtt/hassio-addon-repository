
#!/usr/bin/bash 
set -e
if [ ! -w "/var/lib/nginx" ]
then
  echo "/var/lib/nginx must be writable for the current user"
else
  # Wait for kill 100ms
  sleep 0.1
  /usr/sbin/nginx -c e2e/nginx/nginx.conf  -p . </dev/null &
fi