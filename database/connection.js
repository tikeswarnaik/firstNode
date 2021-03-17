const mongoose = require('mongoose');


const mongodbURL = 'mongodb+srv://tknaik:tknaik@37@cluster0.eeivy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(mongodbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},(e)=>{
    console.log("connected to database");
});