//ROUTES
// =============================================================
var friendArray = require('../data/friends.js')
var path = require('path');

//THIS IS THE MODULE THAT EXPORTS ALL ROUTES. 
module.exports = function(app) {

    // app.get('/', function(req, res) {
    //     res.sendFile(path.join(__dirname, 'public/home.html'));
    // });
    // //survey.html
    // //-----------
    // app.get('/survey', function(req, res) {
    //     res.sendFile(path.join(__dirname, 'public/survey.html'));
    // });


    //ADD THIS BECAUSE DEPLOYED TO HEROKU...............................
    // var currentURL = window.location.origin;
    // app.post(currentURL + "/api/friends", function(req, res) {
    // 	friendArray.push(req.body);


    //GET REQUEST - THIS RENDERS JSON DATA ON KODER FRIENDS
    app.get('/api/friends', function(req, res) {
            res.json(friendArray);
        })
        //POST REQUEST = THIS HANDLES DATA FOR SUBMISSION
    app.post('/api/friends', function(req, res) {
        friendArray.push(req.body);
        res.json(friendArray);
    })

};
