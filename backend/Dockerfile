FROM node:18

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

# Install npm and node-gyp globally
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

# Start the application
CMD ["npm", "start"]
