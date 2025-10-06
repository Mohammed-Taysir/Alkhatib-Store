import { createContext, useState } from "react";


export const OrderContext = createContext();


const OrderContextProvider = ({children}) => {
    const [order, setOrder] = useState('desc');
    return(
        <OrderContext.Provider value = {{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;