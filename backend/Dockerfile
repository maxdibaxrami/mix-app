# Use the official Node.js Alpine base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Configure DNS servers and choose a different Alpine mirror (optional)
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 8.8.4.4" >> /etc/resolv.conf && \
    echo "http://mirror.yandex.ru/alpine/v3.21/main" > /etc/apk/repositories && \
    echo "http://mirror.yandex.ru/alpine/v3.21/community" >> /etc/apk/repositories

# Install Python, build tools, and dependencies for canvas
RUN apk add --no-cache python3 make g++ pkg-config cairo-dev pango-dev pixman-dev

# Copy the package.json and package-lock.json for dependencies
COPY package*.json ./

# Install the Node.js application dependencies
RUN npm install --force

# Copy the rest of the application code into the container
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Set the default command to start the NestJS application
CMD ["npm", "run", "start:prod"]
