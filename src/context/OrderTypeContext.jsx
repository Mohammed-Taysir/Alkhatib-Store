import { createContext, useState } from "react";



export const OrderTypeContext = createContext(null);

const OrderTypeContextProvider = ({children})=> {
    const [orderType, setOrderType] = useState('Price');

    return <OrderTypeContext.Provider value={{orderType, setOrderType}}>
        {children}
    </OrderTypeContext.Provider>
}

export default OrderTypeContextProvider;