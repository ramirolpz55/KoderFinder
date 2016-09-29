//ROUTES
// =============================================================
var friendArray = require('../data/friends.js')
var path = require('path');

//THIS IS THE MODULE THAT EXPORTS ALL ROUTES. 
module.exports = function(app) {


    //GET REQUEST - THIS RENDERS JSON DATA ON KODER FRIENDS
    app.get('/api/friends', function(req, res) {
            res.json(friendArray);
        })
        //POST REQUEST = THIS HANDLES DATA FOR SUBMISSION
    app.post('/api/friends', function(req, res) {
        var compatibleFriend = compatibleMember(req);
        friendArray.push(req.body);
        res.json(compatibleFriend);
    })

};

function compatibleMember(req) {
    var matchIndex = 0;
    var differences = [];

    for (var i = 0; i < friendArray.length; i++) {

        var totalDifference = 0;

        for (var j = 0; j < friendArray[i].scores.length; j++) {
            totalDifference += Math.abs(req.body.scores[j] - friendArray[i].scores[j]);
        }

        differences.push(totalDifference);

    }

    matchIndex = differences.indexOf(Math.min.apply(Math, differences));
    return friendArray[matchIndex];
}
