import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import BasketItem from "../components/BasketItem";

function Basket() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center my-4 sm:my-8 font-bold">
        Basket
      </h1>
      {products.length === 0 ? (
        <p className="text-lg sm:text-xl lg:text-2xl text-center mt-20 sm:mt-[100px] italic">
          No products in the basket!
        </p>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center sm:text-left">
              Total Price:{" "}
              <span className="text-[#eb5971]">{formatPrice(totalPrice)}</span>
            </h3>
            <button
              onClick={() => dispatch({ type: "CLEAR", payload: products })}
              className="btn btn-outline btn-secondary w-full sm:w-auto"
            >
              Clear All
            </button>
          </div>

          {products.map((product) => {
            return <BasketItem key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Basket;
