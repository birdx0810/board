FROM node:18.14 AS build
WORKDIR /app
COPY package*.json .
RUN npm install

FROM node:18.14 AS release
COPY . .
COPY --from=build /app/node_modules .
EXPOSE 3000
CMD [ "node", "src/app.js" ]
