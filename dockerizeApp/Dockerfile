# choosing the base image for our node app
FROM node

# creating and adding workdir
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy and install packages
COPY package.json /usr/src/app
RUN npm install

# copy rest of the files
COPY . /usr/src/app

# exposing port as per their in app
EXPOSE 1337

# Now create an entrypoint the we to run everytime
CMD ["npm", "start"]

# to run this buid image: use command
# docker run -it -p 8002:1337 --name mynodeapp webappsample


# Currently we are running our docker app using npm start, now we'll see
# how we can run our app directly using a reverse proxy web server nginx.

# Now, let's say your app is running in docker and you want to host it somewhere
# then use this nginx.config setting
# server {
#     listen 80;
#     server_name nodeapp.tms.com;
#     location / {
#         proxy_pass http://172.17.0.2:1337;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#     }
# }
# Now, put that above nginx.conf into host config and boom you can access the app running inside docker container on nodeapp.tms.com
