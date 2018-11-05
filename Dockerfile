FROM node:10-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY [ "package*.json", "index.js", "./"]
RUN npm ci --production
EXPOSE 8080
CMD node index.js