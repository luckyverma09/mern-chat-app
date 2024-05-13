# Use a slim Node.js 20 image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy application code
COPY . .


# Install dependencies
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Run the application
CMD [ "npm", "start" ]