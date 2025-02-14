FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache git

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.27.4-alpine

COPY --from=builder /app/_site /usr/share/nginx/html
