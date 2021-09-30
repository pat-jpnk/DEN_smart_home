FROM node:14.16.0
WORKDIR /DEN_SMART_HOME
COPY package.json /DEN_SMART_HOME
RUN npm install 
COPY . /DEN_SMART_HOME
RUN npm run build
EXPOSE 3000
CMD npm run start