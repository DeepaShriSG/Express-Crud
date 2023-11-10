const mongoose = require('mongoose')
const DB = require('../config/dBConfig')

try {
    mongoose.connect(`${DB.dbUrl}/${DB.dbName}`)
    console.log("Database connected Successfully")
    
} catch (error) {
    console.log(error)
}

module.exports = mongoose