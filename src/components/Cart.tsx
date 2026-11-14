
import type { CartItem } from "../types/cart.types";
import type { CartAction } from "../reducers/cart.reducer";
import type { ActionDispatch } from "react";

interface CartProps {
  cart: CartItem[];
  dispatch: ActionDispatch<[action: CartAction]>;
  totalQuantity: number;
  totalPrice: number;
}

const Cart = ({
  cart,
  dispatch,
  totalQuantity,
  totalPrice,
}: CartProps) => {
  return (
    <div dir="rtl" className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          سبد خرید
        </h2>

        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          disabled={cart.length === 0}
          className="text-sm text-red-500 hover:text-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          خالی کردن سبد خرید
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          سبد خرید شما خالی است.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-xl p-4"
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    قیمت هر عدد: {item.price.toLocaleString("fa-IR")} تومان
                  </p>
                </div>

                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  حذف
                </button>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: item.id })
                    }
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.cartQuantity.toLocaleString("fa-IR")}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item.id })
                    }
                    disabled={item.cartQuantity >= item.quantity}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>

                <span className="font-bold text-blue-600">
                  {(item.price * item.cartQuantity).toLocaleString("fa-IR")} تومان
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-3">
                موجودی باقی‌مانده: {(item.quantity - item.cartQuantity).toLocaleString("fa-IR")} عدد
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-gray-200 mt-6 pt-5">
        <div className="flex justify-between text-gray-600 mb-2">
          <span>تعداد کل محصولات:</span>
          <span>{totalQuantity.toLocaleString("fa-IR")} عدد</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>مبلغ قابل پرداخت:</span>

          <span className="text-blue-600">
            {totalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;