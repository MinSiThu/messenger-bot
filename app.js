let express = require('express');
let app = express();
let appConfig = require('./app.config');

let path = require('path');
let morgan = require('morgan');
let httpErrs = require('http-errors');

app.use(morgan('dev'));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(appConfig.port,()=>{
    console.log(`server is running at ${appConfig.port}`);
    
})
