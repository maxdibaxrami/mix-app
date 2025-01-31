# Dockerfile for React (Frontend)
# Stage 1: Build Stage (Node.js based on Debian)
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) from the frontend folder
COPY frontend/package.json frontend/package-lock.json ./

# Install Node.js dependencies
RUN npm install --force

# Copy the rest of the application files from the frontend folder
COPY frontend/ .

# Build the React app
RUN npm run build

# Stage 2: Production Stage (Nginx to serve the built app)
FROM nginx:stable

# Copy the build artifacts from the build stage to the Nginx default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
