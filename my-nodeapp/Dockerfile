FROM node:20.19.2-alpine3.21

COPY package.json package.json.lock ./

WORKDIR  /app

COPY . . 

RUN yarn install 

EXPOSE 3000

CMD  [ "node" , "index.js"]
