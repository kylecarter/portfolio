FROM node:12.5.0-alpine

# Create working directories
RUN mkdir -p /usr/src/app
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY . .

# Copy package.json
RUN npm i -g yarn
RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD yarn start
