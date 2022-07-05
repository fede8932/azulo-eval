FROM node:alpine

COPY . ./api

WORKDIR ./api

ENV NODE_ENV docker

RUN ["npm", "install"]
RUN ["npm", "install", "mysql2"]

CMD [ "npm", "run" , "dev" ]


EXPOSE 3001