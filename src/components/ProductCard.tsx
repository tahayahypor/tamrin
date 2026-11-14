
import type { ActionDispatch } from "react";
import type { Product } from "../types/cart.types";
import type { CartAction } from "../reducers/cart.reducer";

interface ProductCardProps {
  product: Product;
  dispatch: ActionDispatch<[action: CartAction]>;
}

const ProductCard = ({ product, dispatch }: ProductCardProps) => {
  const { title, description, price, quantity } = product;

  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col gap-4"
    >
      <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">
        <span className="text-6xl">💻</span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          موجودی: {quantity.toLocaleString("fa-IR")} عدد
        </span>

        <span className="font-bold text-lg text-blue-600">
          {price.toLocaleString("fa-IR")} تومان
        </span>
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition-colors cursor-pointer"
        onClick={() =>
          dispatch({ type: "ADD_ITEM", payload: product })
        }
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductCard;
