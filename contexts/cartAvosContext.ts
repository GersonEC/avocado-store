import * as React from 'react'

interface ContextProp {
  cartAvos: TProduct[]
}

const CartAvosContext = React.createContext<ContextProp | null>(null)

export default CartAvosContext
