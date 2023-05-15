const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const AdminSchema =new Schema({
    bus_no:{
        type: String,
        required: true,

    },
    date:{
        type: String,
        required: true,

    },
    time:{
        type: String,
        required: true,

    },
    from:{
        type: String,
        required: true,

    },
    to:{
        type: String,
        required: true,

    }

});

module.exports = mongoose.model('Admin',AdminSchema);