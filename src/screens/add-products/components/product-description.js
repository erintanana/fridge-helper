import React, {PureComponent} from 'react';
import {TextInput} from "react-native";
import i18n from "i18n-js";

class ProductDescription extends PureComponent {

    render() {
        return (
            <TextInput multiline editable placeholder={i18n.t('ADD_PRODUCT.DESCRIPTION')}/>
        );
    }

}

export default ProductDescription;
