import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {AddToCart, ChangeMessage} from './../actions/index';
import { prototype } from 'module';

class ProductsContainer extends Component {

    // function hiển thị danh sách sản phẩm
    showProducts = (products) => {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                            key={index} 
                            product = {product}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                        />;
            });
        }
        return result;
    }

	render() {
        var {products} = this.props;
		return (
            <Products>
                {this.showProducts(products)}
            </Products>
		);
	}
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            desciption: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(AddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(ChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
