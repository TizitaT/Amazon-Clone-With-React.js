const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51Ly21fJQKXt1rIJ9dOdg6Y8zPQTGC8qoziTf1vFnJvVZ0FqDqZNct7mMj46iKHmq6xiM4fOpzb4jSTLM7bB2gybG00Mg0xI6GF");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-tizitat/us-central1/api