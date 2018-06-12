const friendsData = require("../data/friends");

module.exports = (app) => {
    // API GET Requests
    // Displays the JSON data of the friends database

    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        // When the form is submited the data gets pushed to the friendsData array
        console.log(req.body.scores);
        var newFriend = req.body;
        var masterCounter = [(4 * newFriend.scores.length), 0];
        for (i = 0; i < friendsData.length; i++) {
            var counter = 0;
            for (j = 0; j < friendsData[i].scores.length; j++) {
                counter = +Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
            }
            if (masterCounter[0] > counter) {
                masterCounter[0] = counter;
                masterCounter[1] = i;
            }
        }
        res.json(friendsData[masterCounter[1]]);
        console.log(friendsData[masterCounter[1]]);
        friendsData.push(req.body);
    });

    app.post("/api/clear", () => {
        // Empty out the arrays of data for testing
        friendsData = [];
        console.log(friendsData);
    });
};