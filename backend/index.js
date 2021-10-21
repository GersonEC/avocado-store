const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

const stripe = new Stripe('')

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.post('/api/checkout', async (req, res) => {
  try {
    const { id, amount } = req.body
    const amountFixed = Math.round(amount)
    const payment = await stripe.paymentIntents.create({
      amount: amountFixed,
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
