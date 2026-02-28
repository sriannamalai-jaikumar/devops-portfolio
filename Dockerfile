############################################
# 1️⃣ Build Stage (Rocky Linux + Node 22)
############################################
FROM rockylinux:9 AS builder

# Update & install required tools
RUN dnf -y update && \
    dnf -y install curl tar xz gzip --allowerasing && \
    dnf clean all

# Install Node.js 22.20.0
RUN curl -fsSL https://nodejs.org/dist/v22.20.0/node-v22.20.0-linux-x64.tar.xz -o node.tar.xz && \
    tar -xJf node.tar.xz -C /usr/local --strip-components=1 && \
    rm -f node.tar.xz

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json ./

# Use npm ci if package-lock.json exists
RUN npm ci

# Copy source code
COPY . .

# Build production React app
RUN npm run build


############################################
# 2️⃣ Production Stage (Rocky + Nginx)
############################################
FROM rockylinux:9

# Install nginx (handle curl-minimal conflict safely)
RUN dnf -y update && \
    dnf -y install nginx --allowerasing && \
    dnf clean all

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]