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
