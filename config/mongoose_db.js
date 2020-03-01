var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/testProject";
var options = {
    user:"",
    pass:"",
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.Promise = global.Promise
mongoose.connect(uri, options).then(
    ()=> console.log('Database is connected'),
    ()=> console.log('Database connectivity failed')
);