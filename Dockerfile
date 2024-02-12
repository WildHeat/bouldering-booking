FROM node:20-alpine
RUN npm install --global serve
COPY /build /build
EXPOSE 3000
CMD [ "serve", "-s", "build" ]