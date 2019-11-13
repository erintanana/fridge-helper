import React, {PureComponent, createRef} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import * as COLORS from '../../../constants/colors';

class ProductName extends PureComponent {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  refInput = createRef();

  setName = (name) => {
    const {onChange} = this.props;
    onChange(name.trim());
  };

  render() {
    return (
      <View style={styles.productNameInfo}>
        {/*<View style={styles.addProductPhoto}>*/}
        {/*<ImageBackground source={ICONS.CAMERA} style={styles.addProductPhotoIcon}/>*/}
        {/*</View>*/}
        <View style={styles.addProductName}>
          <TextInput
            ref={this.refInput}
            editable
            placeholder={i18n.t('ADD_PRODUCT.NAME')}
            onChangeText={this.setName}
            style={styles.input}
            clearTextOnFocus/>
        </View>
      </View>
    );
  }

}

const styles = {
  productNameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addProductName: {
    width: '100%',
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  input: {
    height: 48,
    paddingLeft: 10,
  },
};

export default (ProductName);
