# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Production Stage (Nginx to serve the built app)
FROM nginx:alpine

# Copy the build artifacts from the build stage to the Nginx default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
