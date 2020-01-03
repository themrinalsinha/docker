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
