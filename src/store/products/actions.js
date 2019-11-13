import * as TYPES from './types';

const incrementLastIndex = () => ({type: TYPES.INCREMENT_LAST_INDEX});

const add = product => ({
    type: TYPES.ADD_PRODUCT,
    product
});

export const addProduct = product => {
    return (dispatch, getState) => {
        dispatch(incrementLastIndex());
        dispatch(add(product));
    };
};

export const removeProduct = index => ({
    type: TYPES.REMOVE_PRODUCT,
    index
});