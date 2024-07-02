import { createContext, useContext, useReducer } from "react";

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

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.sku === action.payload.sku
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.sku === action.payload.sku
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.sku !== action.payload
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "SET_SHOW_SHOPPING_CART":
      return {
        ...state,
        showShoppingCart: action.payload,
      };
    default:
      throw new Error(`Ação desconhecida: ${action.type}`);
  }
}

const cartDispatch = (dispatch) => ({
  addToCart: (item) => dispatch({ type: "ADD_TO_CART", payload: item }),
  removeFromCart: (sku) => dispatch({ type: "REMOVE_FROM_CART", payload: sku }),
  clearCart: () => dispatch({ type: "CLEAR_CART" }),
  setShowShoppingCart: (show) =>
    dispatch({ type: "SET_SHOW_SHOPPING_CART", payload: show }),
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
