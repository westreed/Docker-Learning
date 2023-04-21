# Docker-Learning

## Docker Command

Docker-Image 생성하기

```bash
docker build -t {이미지명} {경로}
ex. docker build -t frontend .
```

Docker-Run 컨테이너 생성 및 실행

```bash
docker run --name {컨테이너명} -p 컨테이너포트:호스트포트 {이미지명}
```
