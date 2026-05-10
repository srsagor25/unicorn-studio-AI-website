# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (cache-friendly)
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Build (output: "export" produces /app/out)
COPY . .
RUN npm run build

# --- Serve stage ---
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
