FROM mcr.microsoft.com/playwright:v1.61.1-noble

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx bddgen

CMD ["npx", "playwright", "test"]