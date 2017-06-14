FROM node:6-alpine

# Install consul-template
ENV CONSUL_TEMPLATE_VERSION 0.18.5
RUN mkdir -p /opt/consul-template/bin/
WORKDIR /opt/consul-template/bin
RUN apk add --update openssl
RUN wget https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip \
    && unzip consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip \
    && rm consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip
ENV PATH $PATH:/opt/consul-template/bin