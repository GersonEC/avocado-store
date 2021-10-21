import Button from '@components/Button/Button'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useRouter } from 'next/router'

interface CheckoutFormProps {
  amount: number
}

export const CheckoutForm = ({ amount }: CheckoutFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    })
    if (error) {
      console.log('[error]', error)
    } else {
      const { id } = paymentMethod!
      const { data } = await axios.post('http://localhost:3001/api/checkout', {
        id,
        amount: amount * 100,
      })
      console.log(data)
      elements.getElement(CardElement)?.clear()
      router.push('/thanks')
    }
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <div className="checkout__inputs">
          <div>
            <label style={{ display: 'block' }} htmlFor="name">
              Name
            </label>
            <input type="text" id="name" />
          </div>
          <div>
            <label style={{ display: 'block' }} htmlFor="surname">
              Surname
            </label>
            <input type="text" id="surname" />
          </div>
        </div>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  )
}
