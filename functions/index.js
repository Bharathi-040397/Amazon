const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
    ('sk_test_51HRIYkAP6Wg5pjiYyJNRuEi8jgVYhkWQcZUA1f0ipZUwkQSuCfHyMJS5w4TgRoBfyXioTyDNDArQgRGbdZkWku0200Yquh5kpq')


    //API

    //APP config
const app = express();

//Middlware

app.use(cors({ origin: true }));
app.use(cors()); 
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("payment request received" ,total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });


    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// Listening to the PORT. For localhost, port 7000 will be used
// For the deployment on heroku the environment port will be used.
app.listen( process.env.PORT || 7000, () => {
	console.log("server ON PORT >>" + process.env.PORT);
})