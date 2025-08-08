import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaXmark } from "react-icons/fa6";

function SingleProducts() {
  const { dispatch, products } = useGlobalContext();

  const { id } = useParams();
  const {
    data: prod,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product/" + id);

  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-60">
        <span className="loading loading-spinner loading-xl "></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center mt-60">
        <h1 className="text-2xl italic">{error}</h1>
      </div>
    );
  }
  const handleSubmit = () => {
    const item = products.find((product) => product.id === prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };
  const handleClose = () => {
    history.back();
  };
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl my-4 sm:my-7 font-bold px-4">SingleProduct</h2>
      {prod && (
        <div className="flex flex-col lg:flex-row items-center justify-between p-3 sm:p-5 shadow-xl/30 max-w-4xl mx-auto rounded-2xl gap-4 lg:gap-0">
          <div className="w-full lg:w-[40%] flex justify-center">
            <img className="w-full max-w-xs lg:max-w-none rounded-lg" src={prod.thumbnail} alt="Album" />
          </div>
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 pr-8">{prod.title}</h2>
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 text-xl sm:text-2xl hover:cursor-pointer"
              >
                <FaXmark />
              </button>
            </div>
            <p className="text-2xl sm:text-3xl font-bold mb-3 text-[#eb5971]">
              $<span className="text-2xl sm:text-3xl">{prod.price}</span>
            </p>
            <p className="mb-3 text-sm sm:text-base">{prod.description}</p>
            <p className="text-lg sm:text-xl font-bold mb-2">
              Brand:{" "}
              <span className="font-normal italic text-[#00a9e7]">
                {prod.brand}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row mt-4 justify-between items-center gap-4 sm:gap-0">
              <p className="text-lg sm:text-xl font-bold">
                Rating:{" "}
                <span className="font-bold text-xl sm:text-2xl text-[#eb5971]">
                  {prod.rating}
                </span>
              </p>
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info w-full sm:w-auto"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProducts;
