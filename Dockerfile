FROM node:18.16.0-slim

ENV PORT

WORKDIR /var/app/homeless

COPY . /

RUN npm install
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "serve"