import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Product({ prod }) {
  
  const { dispatch, products, likedProducts } = useGlobalContext();

  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const addLiked = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_LIKED", payload: prod });
    setAlreadyLiked(true);
  };
  const removeLiked = (e) => {
    e.preventDefault();

    setAlreadyLiked(false);
    dispatch({ type: "REMOVE_LIKED", payload: prod.id });
  };

  useEffect(() => {
    const item = likedProducts.find((p) => p.id === prod.id);
    if (item) setAlreadyLiked(true);
  }, [likedProducts, prod.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = products.find((product) => product.id === prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };
  return (
    <>
      <Link to={`/singleProduct/${prod.id}`}>
        <div className="card bg-base-100 w-full shadow-xl hover:shadow-xl/20 cursor-pointer">
          <figure className="relative">
            <img className="h-50" src={prod.thumbnail} alt="" />
            {alreadyLiked && (
              <button
                onClick={removeLiked}
                className="absolute top-3 right-5 text-xl hover:cursor-pointer "
              >
                <FaHeart /> 
              </button>
            )}
            {!alreadyLiked && (
              <button
                onClickCapture={removeLiked}
                onClick={addLiked}
                className="absolute top-3 right-5 text-xl hover:cursor-pointer"
              >
                <FaRegHeart />
              </button>
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{prod.title}</h2>
            <p className="line-clamp-2">{prod.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#eb5971]">${prod.price}</p>
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
