FROM node:latest

ENV NODE_ENV=production

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./ 

RUN npm install --production

COPY . .

CMD ["node", "Server/app.js"]

# CMD ["npm", "start"]