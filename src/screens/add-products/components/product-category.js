import React, {PureComponent} from 'react';
import {ImageBackground,  View} from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import i18n from 'i18n-js';

import * as ICONS from '../../../constants/icons';
import * as COLORS from '../../../constants/colors';
import * as CATEGORIES from '../../../constants/product-details-ids';

const items = [
  CATEGORIES.DRINKS,
  CATEGORIES.FAST_FOOD,
  CATEGORIES.BERRIES,
  CATEGORIES.MILK_PRODUCTS,
  CATEGORIES.VEGETABLES,
];


class ProductCategory extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  placeholder = {
    label: i18n.t('ADD_PRODUCT.CATEGORY.PLACEHOLDER'),
    value: null,
  };

  items = items.map(el => ({
      value: el,
      color: COLORS.BLACK,
      label: i18n.t(`ADD_PRODUCT.CATEGORY.${el}`),
  }));

  setCategory = (category) => {
    const {onChange} = this.props;
    onChange(category);
  };

  render() {
    return (
      <View style={styles.productCategoryInfoWrapper}>
        <View style={styles.productCategoryInfoBox}>
          <ImageBackground source={ICONS.FOOD} style={styles.productCategoryInfoIcon}/>
        </View>
        <View style={styles.productCategoryPickerBox}>
          <RNPickerSelect placeholder={this.placeholder}
                          onValueChange={this.setCategory}
                          style={styles.productCategoryPicker}
                          mode='dropdown'
                          items={this.items}>
          </RNPickerSelect>
        </View>
      </View>
    );
  }

}

const styles = {

  productCategoryInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productCategoryInfoBox: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productCategoryInfoIcon: {
    width: 24,
    height: 24,
  },

  productCategoryPickerBox: {
    width: 280,
  },

  productCategoryPicker: {
    color: 'blue',
  },
};

export default ProductCategory;
