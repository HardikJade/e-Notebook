const moongoose = require('mongoose');
const moongoURI = "mongodb://localhost:27017/e_notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo =async ()=>{
    let connection = await moongoose.connect(moongoURI)
    return connection;
}
module.exports = connectToMongo