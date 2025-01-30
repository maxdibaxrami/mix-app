# Step 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using a lightweight server
FROM nginx:alpine

# Copy build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for nginx
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
