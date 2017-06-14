FROM node:6-alpine

# Install envconsul
ENV ENVCONSUL_VERSION 0.6.2
RUN mkdir -p /opt/envconsul/bin/
WORKDIR /opt/envconsul/bin
RUN apk add --update openssl
RUN wget https://releases.hashicorp.com/envconsul/${ENVCONSUL_VERSION}/envconsul_${ENVCONSUL_VERSION}_linux_amd64.zip \
    && unzip envconsul_${ENVCONSUL_VERSION}_linux_amd64.zip \
    && rm envconsul_${ENVCONSUL_VERSION}_linux_amd64.zip
ENV PATH $PATH:/opt/envconsul/bin