
FROM node:alpine

COPY . ./migration

WORKDIR ./migration

RUN ["npm", "install"]
RUN ["npm", "install", "mysql2"]

CMD [ "npm", "start" ]

EXPOSE 3003