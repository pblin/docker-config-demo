#!/bin/sh

# Configure envconsul
mkdir -p /config
cat > /config/envconsul.hcl <<EOF
consul = "${CONSUL_ADDRESS}:${CONSUL_PORT}"
prefix {
  path = "${ENVIRONMENT}"
}
prefix {
  path = "global"
}
upcase = true
wait = "1s:5s"
EOF

# Wait until a consul node is available
until ping -c 1 ${CONSUL_ADDRESS} &> /dev/null
do
	echo "Consul not available yet, trying again soon..."
	sleep 1
done

# Start it up
/opt/envconsul/bin/envconsul -config /config/envconsul.hcl "$@"