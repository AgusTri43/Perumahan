const mongoose = require("mongoose")

const beritaSchema = mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    isi:{
        type: String,
        required: true
    },
});

const beritaModel = mongoose.model("berita", beritaSchema);

module.exports = beritaModel;