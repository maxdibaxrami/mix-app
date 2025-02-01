# Stage 1: Build the React app
FROM node:18 as build

WORKDIR /app

# Install dependencies for canvas using apt-get (Debian-based)
RUN apt-get update && apt-get install -y python3 make g++ pkg-config libcairo2-dev libpango1.0-dev libpixman-1-dev

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable

# Copy the build folder from the 'build' stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
