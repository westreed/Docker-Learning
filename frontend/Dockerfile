FROM node:18.4.0

WORKDIR /home/blog/frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]

# docker build -t {이미지명} {경로} ex. docker build -t frontend .

# docker run --name {컨테이너명} -p 3000:3000 {이미지명}

# -v $(pwd):/home/blog/frontend 현재 작업 디렉토리에 있는 모든 파일과 폴더를 해당 경로의 디렉토리에 마운트하여 컨테이너와 호스트 간의 파일 시스템을 고유하기 위함.