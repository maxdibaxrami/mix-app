# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app with Vite
RUN npm run build

# React build output will be in the /app/dist directory
