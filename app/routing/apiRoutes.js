const friendsData = require("../app/data/friends");

module.exports = (app) => {
    // API GET Requests
    // Displays the JSON data of the friends database

    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        // When the form is submited the data gets pushed to the friendsData array
        friendsData.push(req.body);
    });

    app.post("/api/clear", () => {
        // Empty out the arrays of data for testing
        friendsData = [];
        console.log(friendsData);
    });
};