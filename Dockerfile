FROM node:12
WORKDIR /var/www/html/korp-voip/app
COPY app /var/www/html/korp-voip/app
RUN npm install
CMD npm run app