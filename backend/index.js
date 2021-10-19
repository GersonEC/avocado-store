const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

const stripe = new Stripe(
  'sk_test_51JeyjHGx8A0zhUcZORTnnxHFOjRCmWPR7AdCwHHtLCwuV0VNGO6XqAPVjampyyZiqSNH3NOa3vfeQad6gfzQzt5700IIlDIOXY'
)

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.post('/api/checkout', async (req, res) => {
  try {
    const { id, amount } = req.body
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'EUR',
      description: 'Avocado',
      payment_method: id,
      confirm: true,
    })
    console.log(payment)
    res.send({ message: 'Succesfull payment' })
  } catch (error) {
    console.log(error)
    res.send({ message: error.row.message })
  }
})
app.listen(3001, () => {
  console.log('Server on port', 3001)
})
