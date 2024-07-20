import { createContext, useEffect, useState } from 'react'
import CartItem from "../model/CartItem"
import Product from "../model/Product"
import useLocalStorage from '../hooks/useLocalStorage'


interface CartContextProps {
  items: CartItem[]
  amountItems: number
  add: (item: Product) => void
  remove: (item: Product) => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function ProviderCart(props: any) {
  const [items, setItems] = useState<CartItem[]>([])
  const { set, get } = useLocalStorage()

  useEffect(() => {
    const cart = get('cart')
    if (cart) {
        setItems(cart)
    }
}, [get])

  function add(product: Product) {
    const index = items.findIndex((i) => i.product.id === product.id)
    if (index === -1) {
      setItems([...items, {product, amount: 1}])
    } else {
      const newItems = [...items]
      newItems[index].amount++
      setItems(newItems)
    }
  }

  function remove(product: Product) {
    const newItems = items
        .map((i) => {
            if (i.product.id === product.id) {
                i.amount--
            }
            return i
        })
        .filter((i) => i.amount > 0)
    changeNewItems(newItems)
}

function changeNewItems(newItems: CartItem[]) {
    setItems(newItems)
    set('carrinho', newItems)
}

  return (
    <CartContext.Provider 
      value={{
        items,
        add,
        remove,
        get amountItems() {
          return items.reduce((total, item) => total + item.amount, 0)
        }
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext