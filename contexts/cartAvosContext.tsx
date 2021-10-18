import * as React from 'react'

export interface CartState {
  cartAvo: TProduct
  quantity: number
}

interface CartAction {
  type: 'add'
  payload: CartState
}

type Dispatch = (action: CartAction) => void

const CartAvosContext = React.createContext<
  { state: CartState[]; dispatch: Dispatch } | undefined
>(undefined)

function cartAvosReducer(state: CartState[], action: CartAction) {
  switch (action.type) {
    case 'add': {
      const { cartAvo, quantity } = action.payload
      const item = state.find((el) => el.cartAvo.id === cartAvo.id)
      const newState = [...state]
      if (item) {
        //update
        item.quantity += quantity
        const index = newState.findIndex((el) => el.cartAvo.id === cartAvo.id)
        newState[index] = item
      } else {
        //add
        newState.push(action.payload)
      }
      return newState
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initialState = [] as CartState[]

function CartProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(cartAvosReducer, initialState)
  const value = { state, dispatch }
  return (
    <CartAvosContext.Provider value={value}>
      {children}
    </CartAvosContext.Provider>
  )
}

function useAvoCart() {
  const context = React.useContext(CartAvosContext)
  if (context === undefined) {
    throw new Error('useAvoCart must be used within a CartAvosContext')
  }
  return context
}

export { CartProvider, useAvoCart }
