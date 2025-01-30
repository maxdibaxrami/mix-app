# Use the Node.js image to build the React app
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app's source code and build the app
COPY . .
RUN yarn build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build output to Nginx's default folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
