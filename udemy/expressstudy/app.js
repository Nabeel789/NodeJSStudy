// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');

const app = express();

// Let express to use handle bar

// Compile with dynamic engine pug
// app.set('view engine', 'pug');

// Compile with dynamic engine handlebar
app.set('view engine', 'hbs');
// Where we can find the dynamic html files
app.set('veiws', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
    res.status(404).render('page-not-found', {pageTitle: 'PAGE NOT FOUND'});
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server is running on : localhost:' + PORT);
});
// const server = http.createServer(app).listen(PORT);