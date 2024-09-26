const express = require('express')
const app = express()
const port = 3000
const cors = require('cors'); // Import the cors package

const stripe = require('stripe')('');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());

app.post('/payment', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2024-06-20'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 10999,
    currency: 'inr',
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: ''
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})