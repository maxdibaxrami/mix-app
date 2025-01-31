FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./
RUN npm install --production # Install only production dependencies

COPY backend/ .

RUN npm run build

# Smaller final image (multi-stage build)
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=0 /app/dist ./dist
COPY backend/package*.json ./
RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/main.js"] # Use the built app