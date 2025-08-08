import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

function LikedProductsPage() {
  const { likedProducts, products, dispatch } = useGlobalContext();

  const removeLiked = (id) => {
    dispatch({ type: "REMOVE_LIKED", payload: id });
  };

  const handleSubmit = (prod) => {
    const item = products.find((product) => product.id === prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-8 text-center">
        Favorite products
      </h1>
      {likedProducts.length === 0 ? (
        <p className="text-center text-2xl mt-30">No your favorite products.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {likedProducts.map((prod) => (
            <div
              key={prod.id}
              className="card bg-base-100 w-full shadow-xl hover:shadow-xl/20"
            >
              <Link to={`/singleProduct/${prod.id}`}>
                <div className="card bg-base-100 w-full shadow-xl hover:shadow-xl/20 cursor-pointer">
                  <figure className="relative">
                    <img
                      className="h-50"
                      src={prod.thumbnail}
                      alt={prod.title}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeLiked(prod.id);
                      }}
                      className="absolute top-3 right-5 text-xl hover:cursor-pointer"
                    >
                      <FaHeart />
                    </button>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title line-clamp-1">{prod.title}</h2>
                    <p className="line-clamp-2">{prod.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-[#eb5971]">
                        ${prod.price}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit(prod);
                        }}
                        className="btn btn-outline btn-info"
                      >
                        Add to Basket
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedProductsPage;