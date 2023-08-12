# Use the official OpenJDK image as the base image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot executable JAR file into the container
COPY target/*.jar app.jar

# Expose the port that your Spring Boot application runs on
EXPOSE 8085

# Command to run the Spring Boot application
CMD ["java", "-jar", "app.jar"]