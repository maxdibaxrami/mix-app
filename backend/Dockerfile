FROM node:18

# Set environment variables
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH
ENV NPM_CONFIG_FETCH_TIMEOUT=60000

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json from the backend folder
COPY backend/package*.json ./  # Adjust the path to package.json

# Install dependencies
RUN npm install --force

# Copy the rest of the backend application code
COPY backend/ .

# Expose the necessary port
EXPOSE 5000

# Command to start the backend app
CMD ["npm", "start"]
