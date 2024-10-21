import React from 'react';

const CartModal = ({ cartItems, onClose, removeFromCart }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-lg">{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-yellow-300 text-black p-2 rounded-lg"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                <button onClick={onClose} className="bg-red-600 text-white p-2 rounded-lg mt-4">
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartModal;
