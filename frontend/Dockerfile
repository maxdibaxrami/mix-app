# Stage 1: Build the React app using Vite
FROM node:18-alpine AS build

# Set the working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies (npm is available in this stage)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app with Vite
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Remove the default nginx HTML page
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the build stage to Nginx's public folder
# Since 'dist' is in the root of the project, we copy it directly from there
COPY --from=build /app/dist /usr/share/nginx/html  # Ensure the correct path

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
