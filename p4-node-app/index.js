const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8080;

// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

// Routes
const UserRouter = require('./routes/users');
const AuthRouter = require('./routes/auth');
const CommmentRouter = require('./routes/comments');
const PostRouter = require('./routes/posts');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/upliftingdb');

server.get('/', ( request, response ) => {
    response.send(`Welcome to Uplifting API`);
});

// Routes
server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/users', UserRouter );
server.use('/api/v1/posts', PostRouter );
server.use('/api/v1/comments', CommmentRouter );

server.listen(
    port, 
    () => {
        console.log(`Server running on port ${ port }`);
    }
);

/* 
    TODO:
    1. Create the models [DONE]
    2. Routes
    3. Test / Make adjustments
    4. Make the collection

*/