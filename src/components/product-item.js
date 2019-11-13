import React, {PureComponent} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import * as COLORS from '../constants/colors';

export default class ProductItem extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  };

  render() {
    const {icon, category, name, weight, days} = this.props;
    const color = days <= 0 ? COLORS.BLACK
      : days <= 3 ? COLORS.RED
        : days <= 7 ? COLORS.AZURE
          : COLORS.GREEN;

    return (
      <View style={styles.listProductItem}>
        <View
          style={styles.listProductCategory}>
          <ImageBackground
            source={icon}
            style={styles.listProductCategoryIcon}
          />
        </View>
        <View
          style={styles.listProductItemInfoGroup}>
          <View
            style={styles.listProductItemInfo}>
            <View>
              <Text style={styles.listProductItemName}>{name}</Text>
            </View>
            <View
              style={styles.listProductItemCategoryGroup}>
              <View>
                <Text style={styles.listProductCategoryName}>{category}</Text>
              </View>
              <View style={styles.dot}/>
              <View>
                <Text style={styles.listProductCategoryName}>{weight}</Text>
              </View>
            </View>
          </View>
          <View style={styles.expireDateInfo}>
            <Text
              style={[styles.expireDateInfoLeft, {borderRightColor: color}]}>
              {days}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  listProductItem: {
    height: 64,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },

  listProductItemInfoGroup: {
    width: 285,
    borderBottomColor: '#EFEFF4',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listProductItemCategoryGroup: {
    display: 'flex',
    flexDirection: 'row',
  },

  listProductItemInfo: {
    width: 220,
  },

  listProductCategory: {
    width: 48,
    height: 48,
    backgroundColor: '#EFEFF4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listProductCategoryIcon: {
    width: 24,
    height: 24,
  },

  listProductItemName: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 4,
  },

  listProductCategoryName: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    lineHeight: 17,
    color: '#8E8E93',
  },

  expireDateInfo: {
    marginRight: 16,
    borderRightWidth: 4,
    borderStyle: 'solid',
    borderRadius: 2,
    width: 40,
    justifyContent: 'center',
  },

  expireDateInfoLeft: {
    width: 32,
    textAlign: 'right',
    marginRight: 8,
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },

  dot: {
    width: 4,
    height: 4,
    margin: 8,
    backgroundColor: '#8E8E93',
    borderRadius: 2,
  },
};
