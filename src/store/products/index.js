import * as TYPES from './types';

const initialState = {
    products: [],
    lastIndex: 0,
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.INCREMENT_LAST_INDEX:
            return {
                ...state,
                lastIndex: state.lastIndex + 1,
            };
        case TYPES.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, {
                    category: action.product.category,
                    name: action.product.name,
                    weight: action.product.weight,
                    weightType: action.product.weightType,
                    expire: action.product.expire,
                    id: state.lastIndex,
                }],
            };
        case TYPES.REMOVE_PRODUCT:
            return {
                products: state.products.filter(el => el.id !== action.index),
                lastIndex: state.lastIndex,
            };
        default:
            return state;
    }
}

export default products;
