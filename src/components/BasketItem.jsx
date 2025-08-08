import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function BasketItem({ product }) {
  const { dispatch } = useGlobalContext();

  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: product.id,
    });
  };

  const decrement = (e) => {
    e.preventDefault();
    dispatch({
      type: "DECREASE_AMOUNT",
      payload: product.id,
    });
  };

  return (
    <Link to={`/singleProduct/${product.id}`}>
      <ul className="mt-4 sm:mt-10 lg:mt-20 flex flex-col gap-5">
        <li className="card bg-base-200 shadow-sm hover:shadow-xl/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-5 gap-4">
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl mx-auto sm:mx-0"
              src={product.thumbnail}
              alt=""
            />
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                {product.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-xl">
                Brand: <span className="font-normal">{product.brand}</span>
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base lg:text-xl mb-2 sm:mb-3">
                Price:{" "}
                <span className="text-[#2d6f87] font-bold">
                  {formatPrice(product.price * product.amount)}
                </span>
              </p>
              <p className="text-sm sm:text-base lg:text-xl">
                Rating:{" "}
                <span className="text-[#953847] font-bold">
                  {product.rating}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={increment}
                className="btn btn-outline btn-circle btn-sm sm:btn-md text-[#2d6f87] border-[#2d6f87] hover:bg-[#2d6f87] hover:text-white"
              >
                +
              </button>
              <span className="cart-amount font-bold text-lg sm:text-xl min-w-[2rem] text-center">
                {product.amount}
              </span>
              <button
                onClick={decrement}
                className="btn btn-outline btn-circle btn-sm sm:btn-md text-[#953847] border-[#953847] hover:bg-[#953847] hover:text-white"
              >
                -
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Link>
  );
}

export default BasketItem;
