import React, {createRef, PureComponent} from 'react';
import {ImageBackground, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import i18n from 'i18n-js';

import * as COLORS from '../../../constants/colors';
import * as WEIGHT from '../../../constants/product-details-ids';

const items = [WEIGHT.ITEM, WEIGHT.GR, WEIGHT.KGR, WEIGHT.L, WEIGHT.ML];

class ProductWeight extends PureComponent {

  static propTypes = {
    onChangeWeight: PropTypes.func.isRequired,
    onChangeWeightType: PropTypes.func.isRequired,
  };

  refInput = createRef();

  placeholder = {
    label: i18n.t('ADD_PRODUCT.WEIGHT.PLACEHOLDER_SELECT'),
    value: null,
  };

  items = items.map(el => ({
    label: i18n.t(`ADD_PRODUCT.WEIGHT.${el}`),
    value: el,
    color: COLORS.BLACK,
  }));

  setWeight = (weight) => {
    const {onChangeWeight} = this.props;
    onChangeWeight(weight.trim());
  };

  setWeightMetric = (metric) => {
    const {onChangeWeightType} = this.props;
    onChangeWeightType(metric);
  };

  render() {

    return (
      <View style={styles.productWeightInfoWrapper}>
        <View style={styles.productWeightInfoBox}>
          <TextInput
            ref={this.refInput}
            style={styles.input}
            editable
            placeholder={i18n.t('ADD_PRODUCT.WEIGHT.PLACEHOLDER')}
            onChangeText={this.setWeight}
            clearTextOnFocus/>
        </View>
        <View style={styles.productWeightPickerBox}>
          <RNPickerSelect placeholder={this.placeholder}
                          onValueChange={this.setWeightMetric}
                          style={styles.productWeightPicker}
                          mode='dropdown'
                          items={this.items}>
          </RNPickerSelect>
        </View>
      </View>
    );
  }

}

const styles = {
  productWeightInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productWeightInfoBox: {
    width: '48%',
    height: 48,
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  productWeightPickerBox: {
    width: '48%',
    height: 48,
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  input: {
    paddingLeft: 10,
    flex: 1,
  },

  productWeightPicker: {
    color: 'blue',
    paddingLeft: 10,
    flex: 1,
  },
};

export default ProductWeight;
