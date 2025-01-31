FROM node:18

# Set the environment to production
ENV NODE_ENV=production

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

# Install necessary system dependencies for canvas (including pkg-config, Cairo, Pango, etc.)
RUN apt-get update && apt-get install -y \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    libgtk2.0-dev \
    libcairo2-dev \
    pkg-config \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Remove build dependencies to keep the image smaller
RUN apt-get purge -y make g++ python3 && rm -rf /var/lib/apt/lists/*

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
