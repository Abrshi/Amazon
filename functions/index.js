const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const dotenv = require("dotenv");  // Correcting the typo from 'dotend' to 'dotenv'
const cors = require("cors");
const { Message } = require("firebase-functions/v1/pubsub");
dotenv.config();  // Corrected name
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors({
    origin: true
}));

app.use(express.json());

app.get("/", (req, res) => {  // Corrected the order of req and res
    res.status(200).json({
        message: "Success!",
    });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(Number(req.query.total)); // Ensure total is a number

    if (total > 0) {
        console.log("Payment received:", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // In cents if using USD (e.g., 100 for $1)
            currency: "usd",
        });

        console.log(paymentIntent);

        res.status(201).json({
            clientsecret:paymentIntent.client_secret
        });
    } else {
        res.status(403).json({
            message: "Amount must be greater than 0"
        });
    }
});


exports.api = onRequest(app);
