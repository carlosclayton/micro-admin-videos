FROM node:19.9.0-slim

RUN mkdir -p /usr/share/man/man1 && \
    apt update && apt install -y \
    git \
    ca-certificates \
    default-jdk \
    zsh \
    curl \
    wget \
    fonts-powerline \
    procps

ENV JAVA_HOME="/usr/lib/jvm/default-jdk"

USER node

WORKDIR /home/node/app


CMD [ "sh", "-c" , "npm install && tail -f /dev/null" ]
