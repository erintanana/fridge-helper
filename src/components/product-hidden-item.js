import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {removeProduct} from '../store/products/actions';


class ProductHiddenItem extends PureComponent {

  static propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        weight: PropTypes.string,
        expire: PropTypes.number,
        id: PropTypes.number,
      },
    ).isRequired,
    onRemove: PropTypes.func,
  };

  onRemove = () => {
    const {item, onRemove} = this.props;
    onRemove(item.id);
  };

  render() {

    return (
      <TouchableOpacity onPress={this.onRemove}>
        <View style={styles.hiddenItem}>
          <Text>Удалить</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  hiddenItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 64,
  },
};

export default connect(
  state => ({
    items: state.products.products,
  }),
  dispatch => ({
    onRemove: index => dispatch(removeProduct(index)),
  }),
)(ProductHiddenItem);
