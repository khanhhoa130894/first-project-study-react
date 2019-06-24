import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import {deleteProductInCart, ChangeMessage, updateProductInCart} from './../actions/index';

class CartContainer extends Component {

    showCartItem = (cart) => {
        var result = <tr><td colSpan="6">{Message.MSG_CART_EMPTY}</td></tr>;
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return (
                    <CartItem 
                        key = {index}
                        item = {item}
                        index = {index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult  cart = {cart}/>
        }
        return result;
    }

	render() {
        var {cart} = this.props; 
		return (
            <Cart >
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
	}
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                desciption: PropTypes.string,
                price: PropTypes.number,
                inventory: PropTypes.number,
                rating: PropTypes.number
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(deleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(ChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(updateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
