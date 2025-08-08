import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center my-6 sm:my-10 font-bold">Products</h2>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-5 ">
        {products.map((prod) => {
          return <Product key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
