import React from 'react';

const ReviewItem = (props) => {
    const { img, name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div style={{ borderBottom: '2px solid black', padding: '20px' }}>
            <img src={img} alt="" />
            <h2>Name{name}</h2>
            <h4>Price:{price}</h4>
            <p>Quantity: {quantity}</p>
            <button
                onClick={() => handleRemove(key)}
                className='btn-regular'>Remove Item</button>
        </div>
    );
};

export default ReviewItem;