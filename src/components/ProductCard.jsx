import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border p-4 rounded-lg bg-slate-300">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-black text-white p-2 rounded-lg"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
