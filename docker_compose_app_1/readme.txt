the purpose of this tiny little application is to make a dock or container
that contains a web application, the app indicates the number of times at
this point that someone essentially has visited this server.

to build this we need two seperate components
NODE_APP & REDIS (visits=10)

one way is to create our node application and put REDIS
inside the same container.

In nodeapp section we'll write all the section required to implement this node application.
----------------------------------

building our node app
# Little strategy to make sure that we only try to rebuild the image any time
# that we change the package not just on file and we won't rebuild the image
# if we make any changes to the source code like in the index.

# to make sure that's the case we're going to first copy over only the package
# not just on file. We'll then run NPM install to get all of our different
# dependencies and then we'll copy over all of our source code with copy (dot) (dot)

create image:
$ docker build -t nodeapp:v1 .

run image:
$ docker run nodeapp:v1

In order to have the count system we need a docker we need REDIS
I order to configure redis with our application we need docker-compose

install docker-compose (sudo apt install docker-compose)

create a file docker-compose
const client  = redis.createClient({
    host: 'redis-server' // this will  automatically connect to the redis server using the name given 'redis-server'
})

starting docker-compose and ending.
start: docker-compose up -d (for daemon mode)
end  : docker-compose down
-----------------------------------------------

// Container maintainance with compose:
-> first we'll and some line of code in index.js file to forcefully crash when someone visits our root node.
-> doing this will crash the node app server but the redis server will stay up.
   in this scenario we want our server to start back again automatically.

Exiting status:
0            -> we exited and everything is OK
1, 2, 3, etc -> We exited because something went wrong!
Exiting status actually helps us to take whether to restart or not.

Docker compose comes with different restart policies like:
-> "no" = never attempts to restart this container if it stops or crashes
-> "always" = if this container stops "for any reaon" always attempts to restart it
-> "on-failure" = Only restart if the container stops with an error code
-> "unless-stopped" = always restart unless we (the developer) forcibly stop it

So, we specify "restart: always" for our node app container
version: '2'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: on-failure/always/unless-stopped/no
    build: .
    ports:
      - "8080:8081"

