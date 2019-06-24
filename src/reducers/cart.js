import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [];

var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const cart = (state = initialState, action) => {
	switch(action.type){
        case Types.ADD_TO_CART:
            var index = findProductInCart(state, action.product);
            if(index !== -1){
                state[index].quantity += action.quantity;
            }else{
                state.push({
                    product: action.product,
                    quantity: action.quantity
                });
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            var index1 = findProductInCart(state, action.product);
            if(index !== -1){
                state.splice(index1, 1);
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            var index2 = findProductInCart(state,action.product);
            if(index2 !== -1){
                state[index2].quantity = action.quantity;
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        default: 
			return [...state];
	}
}

export default cart;