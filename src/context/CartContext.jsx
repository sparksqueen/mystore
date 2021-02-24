import { createContext } from 'react'

export const cartContext = createContext()
console.log(cartContext);

function CartContext({children}) {
    return ( 
        <cartContext.Provider value={'value'}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContext;