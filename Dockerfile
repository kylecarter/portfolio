FROM node:10.13-alpine

# Create working directories
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json
ENV NODE_ENV production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm run build
COPY . /usr/src/app

EXPOSE 3000
CMD npm run start
