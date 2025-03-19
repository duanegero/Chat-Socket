FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3007
CMD [ "node", "server.js" ]