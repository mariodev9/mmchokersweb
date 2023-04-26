export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SAVE_BUYER_DATA = "SAVE_BUYER_DATA";

const AddProductToCart = (product, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { cart: updatedCart };
  // return { cart: updatedCart, total: state.total++ };
};

const RemoveProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { cart: updatedCart };
  // return { cart: updatedCart, total: state.total-- };
};

const SaveBuyerData = (data, state) => {
  return { ...state, buyerData: data };
};

export const shopReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ADD_PRODUCT:
      return AddProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return RemoveProductFromCart(action.productId, state);

    case SAVE_BUYER_DATA:
      return SaveBuyerData(action.data, state);

    default:
      return state;
  }
};
