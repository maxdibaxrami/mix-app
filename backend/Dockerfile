# Dockerfile for NestJS (Backend)
# Stage 1: Build Stage (Node.js based on Debian)
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Install required system dependencies (for canvas and others)

# Copy package.json and package-lock.json (if using npm)
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install --force

# Copy the rest of the application files
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port NestJS will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
