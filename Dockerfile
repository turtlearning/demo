# 1. OpenJDK 21 기반 이미지 사용
FROM openjdk:21-jdk-slim

# 2. 애플리케이션 JAR 파일 경로 설정
ARG JAR_FILE=build/libs/*.jar

# 3. 컨테이너 내부의 실행할 JAR 파일 복사
COPY ${JAR_FILE} /app.jar

# 8080 포트 오픈
EXPOSE 8080

# 4. 컨테이너 시작 시 실행할 명령어 지정
ENTRYPOINT ["java", "-jar", "/app.jar"]
