var mongoose = require('mongoose');
var schema = mongoose.Schema;




/**
 *
 *
 * Modelo basado en estructura de bd (14/05/2014)
 *
 * Se almacenan los autos disponibles para pruebas de manejo
 *
 */
var CarSchema = new schema({

    active: Boolean,

    available: Boolean,

    color: String,

    icon: String,

    latitude: Number,

    longitude: Number,

    model: String,

    pictures: [],

    company_id : schema.Types.ObjectId,
    
    concessionaire_id : schema.Types.ObjectId,

    serial: String,

    transmission: String,

    unit: String,

    version: String

});



module.exports = mongoose.model('Car', CarSchema);