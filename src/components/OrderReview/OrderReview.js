import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCarts(products)
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button
                            onClick={handlePlaceOrder}
                            className="btn-regular">Proceed to Shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;