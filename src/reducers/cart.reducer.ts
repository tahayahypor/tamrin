
import type { CartItem, Product } from "../types/cart.types";

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "INCREASE"; payload: string }
  | { type: "DECREASE"; payload: string }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };




export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.cartQuantity >= existingItem.quantity) {
          return state;
        }

        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }

      return [
        ...state,
        { ...action.payload, cartQuantity: 1 },
      ];
    }

    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload &&
        item.cartQuantity < item.quantity
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0);

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
