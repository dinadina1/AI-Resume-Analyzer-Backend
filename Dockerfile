# ---------- Build Stage ----------
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TS → JS
RUN npm run build

# ---------- Production Stage ----------
FROM node:20-slim

WORKDIR /app

# Install OpenSSL (REQUIRED)
RUN apt-get update && apt-get install -y openssl

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]