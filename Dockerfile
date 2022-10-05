FROM node:16.17.1-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache git

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.18.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
