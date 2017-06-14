#!/bin/sh

# Configure consul-template
mkdir -p /config
cat > /config/consul-template.hcl <<EOF
consul {
	address = "${CONSUL_ADDRESS}:${CONSUL_PORT}"
}
wait {
	min = "1s"
	max = "5s"
}
exec {
	command = "$@"
}
template {
	source = "/templates/config.ini.ctmpl"
	destination = "/etc/app/config.ini"
}
EOF

# Wait until a consul node is available
until ping -c 1 ${CONSUL_ADDRESS} &> /dev/null
do
	echo "Consul not available yet, trying again soon..."
	sleep 1
done

# Start it up
/opt/consul-template/bin/consul-template -config /config/consul-template.hcl