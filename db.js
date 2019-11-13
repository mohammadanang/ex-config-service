let mongoose = require("mongoose")
var host = process.env.DB_HOST

mongoose.connect(host, {
    'useNewUrlParser': true
})
mongoose.set('useCreateIndex', true)
