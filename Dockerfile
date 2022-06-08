FROM ubuntu:18.04

RUN dpkg --configure -a
RUN apt-get update
RUN apt-get -y install nodejs npm sqlite3 curl

ENV NODE_VERSION=16.13.2
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN sqlite3 --version
RUN node --version
RUN npm --version

COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]