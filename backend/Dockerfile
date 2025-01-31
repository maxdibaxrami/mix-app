# Stage 1: Build Stage (Node.js based on Debian)
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Check if the apt sources.list exists, and if not, create it
RUN test -f /etc/apt/sources.list || echo "deb http://deb.debian.org/debian stable main" > /etc/apt/sources.list

# Update apt sources and install required system dependencies for Node.js and building
RUN apt-get update && apt-get install -y \
  python3 \
  build-essential \
  libc6-dev \
  libcairo2-dev \
  libpango1.0-dev \
  libpixman-1-dev \
  pkg-config

# Copy package.json and package-lock.json (if using npm)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Production Stage (Nginx based on Ubuntu)
FROM nginx:stable

# Copy the build artifacts from the build stage to the Nginx default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
