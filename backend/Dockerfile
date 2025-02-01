# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install Python, build tools, and dependencies for canvas
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    pkg-config \
    libcairo2-dev \
    libpango1.0-dev \
    libpixman-1-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
