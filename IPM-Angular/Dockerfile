# Use the official Node.js/alpine image as the base image
FROM node:current-alpine3.17 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build --prod
RUN npm cache clean --force

# Use a smaller nginx image to serve the Angular app
# FROM nginx:latest-alpine 
FROM nginx:alpine as prod

# Copy the built Angular app from the previous stage to the nginx web root
COPY --from=build /usr/src/app/dist/ipm-rll-project /usr/share/nginx/html

# Expose port 80 to serve the Angular app
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
