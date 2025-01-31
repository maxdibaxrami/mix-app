# Base image for the application
FROM node:18-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Install Python, build tools, and dependencies for canvas
#RUN apk add --no-cache python3 make g++ cairo-dev pango-dev pixman-dev pkgconfig libc6-compat
RUN apt-get update && apt-get install -y python3 python3-dev build-essential

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
