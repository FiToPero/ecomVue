FROM node:lts-alpine

RUN npm install -g http-server

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]

# docker build -t vue-app . 
# docker run -p 8080:8080 vue-app