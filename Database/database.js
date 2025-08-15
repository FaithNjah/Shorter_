const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/url-shortener';

const connectToDatabase = async()=> {
    const connect = await mongoose.connect(url);
    if(connect){
        console.log('database unlocked!')
    }
}

module.exports = {connectToDatabase}
