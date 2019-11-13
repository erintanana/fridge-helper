import React, {PureComponent} from 'react';
import {ImageBackground, View} from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import i18n from "i18n-js";

import * as COLORS from '../../../constants/colors';
import * as ICONS from '../../../constants/icons';
import * as PLACES from '../../../constants/product-details-ids';

const items = [PLACES.FREEZE, PLACES.FREEZER];

class ProductHolder extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  setHolder = (place) => {
    const {onChange} = this.props;

    onChange(place);
  };

  placeholder = {
    label: i18n.t("ADD_PRODUCT.PLACE.PLACEHOLDER"),
    value: null,
  };

  items = items.map(el => ({
    color: COLORS.BLACK,
    value: el,
    label: i18n.t(`ADD_PRODUCT.PLACE.${el}`),
  }));

  render() {

    return (
      <View style={styles.productHolderInfoWrapper}>
        <View style={styles.productHolderInfoBox}>
          <ImageBackground source={ICONS.FRIDGE} style={styles.productHolderInfoIcon}/>
        </View>
        <View style={styles.productHolderPickerBox}>
          <RNPickerSelect placeholder={this.placeholder}
                          onValueChange={this.setHolder}
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

  productHolderInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productHolderInfoBox: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productHolderInfoIcon: {
    width: 24,
    height: 24,
  },

  productHolderPickerBox: {
    width: 280,
  },

  productHolderPicker: {},
};

export default ProductHolder;
