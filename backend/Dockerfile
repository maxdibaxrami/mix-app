FROM node:18-alpine

WORKDIR /app

COPY package*.json ./  # Correct: Copies from the build context (./backend)
RUN npm install --production

COPY . .  # Correct: Copies everything else from the build context

RUN npm run build

# Multi-stage build (as before)
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=0 /app/dist ./dist
COPY package*.json ./
RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/main.js"]