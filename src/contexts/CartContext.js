import { createContext, useContext, useReducer } from "react";

const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  SET_SHOW_SHOPPING_CART: "SET_SHOW_SHOPPING_CART",
};

const initialState = {
  cartItems: [],
  showShoppingCart: false,
};

const CartContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const addProductToCart = (cartItems, product) => {
  const existingItem = cartItems.find((item) => item.sku === product.sku);
  if (existingItem) {
    return cartItems.map((item) =>
      item.sku === product.sku ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeProductFromCart = (cartItems, sku) => {
  return cartItems.filter((item) => item.sku !== sku);
};

const updateProductQuantity = (cartItems, sku, quantity) => {
  const item = cartItems.find((item) => item.sku === sku);
  if (item.quantity === 1 && quantity < 1) {
    return removeProductFromCart(cartItems, sku);
  }
  return cartItems.map((item) =>
    item.sku === sku ? { ...item, quantity } : item
  );
};

function cartReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addProductToCart(state.cartItems, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeProductFromCart(state.cartItems, action.payload),
      };
    case actionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: updateProductQuantity(
          state.cartItems,
          action.payload.sku,
          action.payload.quantity
        ),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case actionTypes.SET_SHOW_SHOPPING_CART:
      return {
        ...state,
        showShoppingCart: action.payload,
      };
    default:
      throw new Error(`Ação desconhecida: ${action.type}`);
  }
}

const cartDispatch = (dispatch) => ({
  addToCart: (product) =>
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product }),
  updateQuantity: (sku, quantity) =>
    dispatch({ type: actionTypes.UPDATE_QUANTITY, payload: { sku, quantity } }),
  removeFromCart: (sku) =>
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: sku }),
  clearCart: () => dispatch({ type: actionTypes.CLEAR_CART }),
  setShowShoppingCart: (value) =>
    dispatch({ type: actionTypes.SET_SHOW_SHOPPING_CART, payload: value }),
});

const useCartDispatch = () => {
  const { dispatch } = useCart();
  return cartDispatch(dispatch);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart, useCartDispatch };
