FROM node:18


# Install dependencies for canvas and other native modules
RUN apt-get python3 \
    make \
    g++ \
    libcairo2-dev \
    libpango1.0-dev \
    libpixman-1-dev \
    pkg-config \
    libc6-compat \
    && rm -rf /var/lib/apt/lists/*

# Set the environment for production
ENV NODE_ENV=production

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH


# Set npm environment variables to improve canvas installation
ENV npm_config_canvas_binary=true
ENV npm_config_fetch_timeout=60000
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
