import { useReducer } from "react";
import CartContext from "./CartContext";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SAVE_BUYER_DATA,
  shopReducer,
} from "./Reducer";

export default function UseCartContext(props) {
  const { children } = props;

  const initialState = {
    cart: [],
    // total: 0,
    buyerData: {},
  };
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const AddProductToCart = (productData) => {
    dispatch({ type: ADD_PRODUCT, product: productData });
  };

  const RemoveProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const saveBuyerData = (data) => {
    dispatch({ type: SAVE_BUYER_DATA, data: data });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        buyerData: state.buyerData,
        AddProductToCart: AddProductToCart,
        RemoveProductFromCart: RemoveProductFromCart,
        SaveBuyerData: saveBuyerData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
