# Base image for the application
FROM node:18-alpine AS base

# Set working directory
WORKDIR /usr/src/app

RUN echo "https://dl-4.alpinelinux.org/alpine/v3.21/main" > /etc/apk/repositories && \
    echo "https://dl-4.alpinelinux.org/alpine/v3.21/community" >> /etc/apk/repositories

# Install Python, build tools, and dependencies for canvas
RUN apk add --no-cache python3 make g++ cairo-dev pango-dev pixman-dev pkgconfig libc6-compat
RUN apk update && apk add --no-cache python3 py3-pip build-base

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

ENV PYTHON=/usr/bin/python3

# Copy package.json and package-lock.json (or yarn.lock if you're using yarn)
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port that NestJS will run on
EXPOSE 3000

# Start the NestJS application in production mode
CMD ["npm", "run", "start:prod"]
