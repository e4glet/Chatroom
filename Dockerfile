# On the shoulder of giant
FROM node

MAINTAINER e4glet


# Create app directory
WORKDIR /home/node

# Install app dependencies
# Bundle app source
COPY . .

RUN npm install -g && npm install express -g && npm install supervisor -g
# If you are building your code for production
# RUN npm install --registry=https://registry.npm.taobao.org

# Bind port and start
EXPOSE 3000
CMD [ "npm", "start" ]