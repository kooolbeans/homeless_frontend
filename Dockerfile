FROM node:18.16.0-slim

ENV ENV="production"
ENV PORT=3000

WORKDIR /var/app/homeless

COPY . /

RUN npm install
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "serve" ]