import Button from '@components/Button/Button'
import { useAvoCart } from 'contexts/cartAvosContext'

export default function Cart() {
  const avosCart = useAvoCart()
  const avos = avosCart.state
  const totalQuantity = avosCart.state
    .map((el) => el.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0)

  return (
    <div className="cart">
      {avos.map((avo) => (
        <div className="cart__row" key={avo.cartAvo.id}>
          <img
            src={avo.cartAvo.image}
            alt={avo.cartAvo.name}
            title={avo.cartAvo.name}
            height={'140'}
          />
          <div>
            <h3>{avo.cartAvo.name}</h3>
            <span>
              {avo.quantity} x {avo.cartAvo.price}€
            </span>
          </div>
        </div>
      ))}
      <div className="cart__total">
        <h3>Totale: {totalQuantity}</h3>
        <Button onClick={() => {}} label={'Checkout'} />
      </div>
    </div>
  )
}
