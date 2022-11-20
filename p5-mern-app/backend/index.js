const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8444;

// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

// Routes
const PhysicianRouter = require('./routes/physicians');
const AuthRouter = require('./routes/auth');
const PatientRouter = require('./routes/patients');
const AdmissionRouter = require('./routes/admissions');
const PrescriptionRouter = require('./routes/prescriptions');
// const EventRouter = require('./routes/events');
// const PackageRouter = require('./routes/packages');


// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/eprescribedb');

server.get('/', ( request, response ) => {
    response.send(`Welcome to e-Prescribe API`);
});

// Routes
server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/physicians', PhysicianRouter );
server.use('/api/v1/patients', PatientRouter );
server.use('/api/v1/admissions', AdmissionRouter );
server.use('/api/v1/prescriptions', PrescriptionRouter );
// server.use('/api/v1/events', EventRouter );
// server.use('/api/v1/packages', PackageRouter );

server.listen(
    port, 
    () => {
        console.log(`Server running on port ${ port }`);
    }
)