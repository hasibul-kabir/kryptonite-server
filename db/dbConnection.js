const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
    mongoose.connect(process.env.DB_URL, () => {
        console.log(`Database Connected`);
    });
}