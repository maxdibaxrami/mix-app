FROM node:18

# Set the environment for production
ENV NODE_ENV=production

# Set the pkg-config path
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH

# Install necessary dependencies
RUN apk add --no-cache python3 make g++ cairo-dev pango-dev pixman-dev pkgconfig --no-cache libc6-compat


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
