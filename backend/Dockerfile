# Base image for the application
FROM node:18 AS base

# Set working directory
WORKDIR /usr/src/app

# Install system dependencies (Python, build tools)
RUN apt-get update && apt-get install -y \
  python3 \
  build-essential \
  libc6-dev \
  cairo-dev \
  pango-dev \
  pixman-dev \
  pkg-config

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Copy package.json and package-lock.json (or yarn.lock if you're using yarn)
COPY package*.json ./

# Install dependencies
RUN npm install --production --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port that NestJS will run on
EXPOSE 3000

# Start the NestJS application in production mode
CMD ["npm", "run", "start:prod"]
