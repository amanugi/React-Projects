import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.navHeading}>Shopping Cart</div>
            <div style={styles.cartIconContainer}>
                <img style = {styles.cartIcon} src="https://img-premium.flaticon.com/png/128/2273/premium/2273100.png?token=exp=1625843356~hmac=0442c0b9b6acbffc2e5d0683338d0580" alt="cart-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 50,
        marginRight: 20
    },
    nav: {
        // position: 'fixed',
        // zIndex: 1,
        height:70,
        background: 'lightBlue',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        marginRight: 3,
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: 9
    },
    navHeading: {
        padding: 20,
        fontSize: 20,
        color: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Navbar;