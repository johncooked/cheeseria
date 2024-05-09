# Build frontend and run tests
FROM node:20.10.0 AS frontend-builder
WORKDIR /app/cheeseria-frontend
COPY cheeseria-frontend/my-app/package.json cheeseria-frontend/my-app/package-lock.json ./
RUN npm install
COPY cheeseria-frontend/my-app ./
RUN npm run build

# Build backend
FROM node:20.10.0 AS backend-builder
WORKDIR /app/cheeseria-backend
COPY cheeseria-backend/package.json cheeseria-backend/package-lock.json ./
RUN npm install
COPY cheeseria-backend/src ./

# Create final image
FROM node:20.10.0 
WORKDIR /app/cheeseria-backend
COPY --from=frontend-builder /app/cheeseria-frontend/build ./cheeseria-frontend/build
COPY --from=backend-builder /app/cheeseria-backend ./
EXPOSE 4000
CMD [ "node", "app.js" ]
