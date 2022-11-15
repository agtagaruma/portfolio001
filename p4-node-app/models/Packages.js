const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    package_name : String,
    package_details : String,
    package_flightDeparture : Date,
    package_flightArrival : Date,
    package_flightOrigin : String,
    package_flightDestination : String,
    package_flightReturnDeparture : Date,
    package_flightReturnArrival : Date,
    package_flightReturnOrigin : String,
    package_flightReturnDestination : String,
    package_accommodationCheckIn : Date,
    package_accommodationCheckOut : Date,
    package_accommodationLocation : String,
    package_price : Number,
    package_terms : String

    
});

module.exports = mongoose.model('Package', PackageSchema);