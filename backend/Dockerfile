FROM node:18

# Install dependencies
RUN apt-get update && apt-get install -y \
  pkg-config \
  libcairo2-dev \
  libjpeg-dev \
  librsvg2-dev \
  python3 \
  make \
  g++ \
  libpango1.0-dev \
  libgif-dev \
  libpangocairo-1.0-0 \
  libglib2.0-dev

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

# Install npm and node-gyp
RUN npm install -g npm@11.1.0
RUN npm install -g node-gyp

# Set environment variables to improve npm installation
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

CMD ["npm", "start"]
