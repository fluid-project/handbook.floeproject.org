FROM node:10-alpine AS builder

RUN apk add --no-cache git

USER node
COPY --chown=node . /app
WORKDIR /app

RUN npm install && $(npm bin)/docpad generate --env static


FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
