# Use the official nginx image as the base image
FROM nginx:alpine

# Copy the contents of your directory to the default nginx public folder
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4548 for HTTP traffic
EXPOSE 4548

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]