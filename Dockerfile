FROM node:12.13.1-alpine3.9

WORKDIR /app
COPY . /app
CMD ["node", "app.js"]
