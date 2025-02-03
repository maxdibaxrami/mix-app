# Stage 1: Build the React app using Vite
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app using Vite (the default output folder is 'dist')
RUN npm run build

# Stage 2: Copy build output to the mounted volume
# This will automatically copy the contents of dist/ to /var/www/frontend/dist/
RUN cp -r /app/dist/* /var/www/frontend/dist/
