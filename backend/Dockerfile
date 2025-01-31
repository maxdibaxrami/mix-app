FROM node:18

# Set the environment for production
ENV NODE_ENV=production

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

# Install necessary dependencies
RUN apt-get update -o Acquire::http::Timeout=60 && \
    apt-get install -y apt-transport-https ca-certificates && \
    sed -i 's|http://archive.ubuntu.com/ubuntu/|http://mirrors.edge.kernel.org/ubuntu/|' /etc/apt/sources.list && \
    apt-get update -o Acquire::http::Timeout=60 && \
    apt-get install -y \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    libgtk2.0-dev \
    libcairo2-dev \
    pkg-config \
    python3 \
    make \
    g++ && \
    rm -rf /var/lib/apt/lists/*

# Install node-gyp globally
RUN npm install -g node-gyp

# Set npm environment variables to improve canvas installation
ENV npm_config_canvas_binary=true
ENV npm_config_fetch_timeout=60000

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
