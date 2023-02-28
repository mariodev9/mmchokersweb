import { useReducer } from "react";
import CartContext from "./CartContext";
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from "./Reducer";

export default function UseCartContext(props) {
  const { children } = props;

  const initialState = {
    cart: [],
    total: 0,
  };
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const AddProductToCart = (productData) => {
    dispatch({ type: ADD_PRODUCT, product: productData });
  };

  const RemoveProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        AddProductToCart: AddProductToCart,
        RemoveProductFromCart: RemoveProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
