FROM node:18

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
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
