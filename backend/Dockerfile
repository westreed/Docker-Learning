FROM openjdk:11-jre-slim

WORKDIR /home/blog/backend

# TODO: 호스트와 컨테이너 사이 공부 더 하기
COPY spring-server-0.0.1-SNAPSHOT.jar ./app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]