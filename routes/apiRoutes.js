const router = require("express").Router();
router.use(require("body-parser").text());
// const stripe = require('stripe')(process.env.stripe_key);
const stripe = require('stripe')(process.env.test_key);

router.post("/charge", async (req, res) => {
  console.log(req.price)
    try {
      let {status} = await stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

module.exports = router;