//THIS PATH REQUIRE THE NODE MODULE PATH 
var path = require('path');

//MODULE THAT EXPORTS THE HTML ROUTES 
//=================================================================
module.exports = function(app) {

    //THIS IS THE DEFAULT LINK TO THE HOMEPAGE
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    //THIS IS THE LINK TO THE SURVEY 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
}
