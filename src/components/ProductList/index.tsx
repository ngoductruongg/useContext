import { ProductContext } from "src/components/Context"
import { useContext, useEffect } from "react";

const ProductList = () => {
    const { products, addProduct, fetchProduct, editProduct, deleteProduct } =
        useContext(ProductContext);

    useEffect(() => {
        fetchProduct();
    }, []);
 console.log("products",products);
 
    
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}

            <button onClick={() => addProduct({ name: "Product C" })}>Add Product</button>
            <button onClick={() => editProduct({ name: "Product C update", id: 3 })}>
                Edit Product
            </button>
            <button onClick={() => deleteProduct({ name: "Product C update", id: 3 })}>
                Delete Product
            </button>
        
        </div>
    );
   
};



export default ProductList;
