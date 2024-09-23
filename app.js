const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render('about');
})
app.get('/contact',(req,res) => {
    res.render('contact');
})

app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
});
