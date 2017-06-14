#!/bin/sh

# Template configuration file
mkdir -p /etc/app
cat > /etc/app/config.ini <<EOF
[default]
first_name = ${FIRST_NAME}
last_name = ${LAST_NAME}
gravatar_url = ${GRAVATAR_URL}
port = ${PORT}
EOF

# Run application
eval "$@"