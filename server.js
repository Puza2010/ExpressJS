var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./17_6/views');
app.use('/store', function(req, res, next){
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/register?', function (req, res) {
	res.send('Hello world!');
});

app.get('/auth/google', function (req, res) {
	res.render('index');
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.get('/', function(req, res){
    res.render('17_6', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});
app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});