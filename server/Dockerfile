FROM node:12


WORKDIR /src
COPY package*.json ./
COPY . ./


RUN npm i

EXPOSE 3000:3000

CMD ["npm","start"]