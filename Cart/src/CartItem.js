// eslint-disable-next-line
import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } = props.product;  // object destructuring
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } = props
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="" src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}> {title} </div>
                <div style={{color: '#777'}}>Rs: {price} </div>
                <div style={{color: '#777'}}>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* {Buttons} */}
                    <img 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                        alt="increase" 
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                        alt="delete" 
                        onClick = {() => onDeleteQuantity(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 5,
        background: '#ccc'
    }
}

export default CartItem;