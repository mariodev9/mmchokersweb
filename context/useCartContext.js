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

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  // function findIndexCantidad(id) {
  //   let i = state.cantidad.findIndex((item) => item.id === id);
  //   return i;
  // }

  //Funcion que incrementa la cantidad dado un ID en STATE.CANTIDAD

  //   const listameProductos = async () => {
  //     const res = await axios.get(
  //       "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
  //     );
  //     dispatch({ type: "LISTAME_PRODUCTOS", payload: res.data });
  //   };

  //Esta funcion agrega items al carrito, en caso de no existir se incrementa la cantidad de dicho producto

  // const eliminarCarrito = (item, precio, q) => {
  //   let payload = { item, precio, q };
  //   dispatch({ type: "ELIMINAR_CARRITO", payload: payload });
  // };

  // const agregarCantidad = (item, precio) => {
  //   let payload = { item, precio };
  //   let indice = findIndexCantidad(item);
  //   state.cantidad[indice].cantidad++;
  //   dispatch({ type: "SUMAR_TOTAL", payload: payload });
  // };

  // const disminuirCantidad = (item, precio) => {
  //   let payload = { item, precio };
  //   let indice = findIndexCantidad(item);
  //   if (state.cantidad[indice].cantidad > 1) {
  //     state.cantidad[indice].cantidad--;
  //     dispatch({ type: "RESTAR_TOTAL", payload: payload });
  //   }
  // };

  // const vaciarCarrito = () => {
  //   let payload = {};
  //   dispatch({ type: "VACIAR_CARRITO", payload: payload });
  // };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        AddProductToCart: AddProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
