FROM node:18
WORKDIR /app
COPY package.json jest.config.js ./
RUN npm install
COPY src ./src
CMD ["npm", "start"]