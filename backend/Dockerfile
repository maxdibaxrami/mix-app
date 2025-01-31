FROM node:18



# Set environment variables
ENV PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH
ENV NPM_CONFIG_FETCH_TIMEOUT=60000

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
