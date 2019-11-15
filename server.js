const express = require("express");
const path = require("path");
// const stripe = require('stripe')(process.env.stripe_key);
const stripe = require('stripe')(process.env.test_key);

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"))

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/charge", function(req, res) {
    const token = req.body.stripeToken;
    (async () => {
        const charge = await stripe.charges.create({
          amount: 10,
          currency: 'usd',
          description: 'Example charge',
          source: token,
        });
    })().then(() => {
        res.sendFile(path.join(__dirname, "./public/success.html"));
    }).catch((error) => {
        console.log(error)
        res.sendFile(path.join(__dirname, "./public/failure.html"));
    });
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});