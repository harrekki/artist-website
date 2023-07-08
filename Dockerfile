FROM amazoncorretto:17
WORKDIR /app
COPY target/* ./
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "artworksAPI-0.0.1-SNAPSHOT.jar"]