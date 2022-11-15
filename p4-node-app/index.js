const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8040;

// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

// Routes
const UserRouter = require('./routes/users');
const AuthRouter = require('./routes/auth');
const AccommodationRouter = require('./routes/accommodations');
const CheckoutRouter = require('./routes/checkouts');
const FlightRouter = require('./routes/flights');
const EventRouter = require('./routes/events');
const PackageRouter = require('./routes/packages');


// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/viaherodb');

server.get('/', ( request, response ) => {
    response.send(`Welcome to Viahero API`);
});

// Routes
server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/users', UserRouter );
server.use('/api/v1/accommodations', AccommodationRouter );
server.use('/api/v1/checkouts', CheckoutRouter );
server.use('/api/v1/flights', FlightRouter );
server.use('/api/v1/events', EventRouter );
server.use('/api/v1/packages', PackageRouter );

server.listen(
    port, 
    () => {
        console.log(`Server running on port ${ port }`);
    }
);