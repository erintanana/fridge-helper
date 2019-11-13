import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import moment from 'moment';

import * as ICONS from '../../constants/icons';
import * as ROUTES from '../../constants/routes';
import {addProduct} from '../../store/products/actions';
import * as COLORS from '../../constants/colors';
import ProductName from './components/product-name';
import ExpireDate from './components/expire-date';
import ProductCategory from './components/product-category';
//import ProductHolder from './components/product-holder'; todo uncomment for future release
// import ProductDescription from './components/product-description'; todo uncomment for future release
// import ProductNotification from './components/product-notification'; todo uncomment for future release
import ProductWeight from './components/product-weight';

class AddProduct extends PureComponent {

  static propTypes = {
    back: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    icon: ICONS.BERRIES,
    category: '',
    weight: '',
    weightType: '',
    expire: moment(),
    isActiveButton: false,
  };

  back = () => {
    this.props.navigation.navigate(ROUTES.DASHBOARD);
  };

  add = () => {
    const {add} = this.props;
    const {name, category, weight, weightType, expire} = this.state;
    const product = {
      name,
      category,
      weight,
      weightType,
      expire,
    };
    add(product);
    this.props.navigation.navigate(ROUTES.DASHBOARD);
  };

  checkAllDate = () => {
    const {expire, weight, weightType, category, name} = this.state;
    const isActiveButton = expire && weight && weightType && category && name;

    this.setState({isActiveButton});
  };

  onChangeProductName = (text) => {
    this.setState({name: text}, this.checkAllDate);
  };

  onChangeProductCategory = (category) => {
    this.setState({category}, this.checkAllDate);
  };

  onChangeProductWeight = (weight) => {
    this.setState({weight}, this.checkAllDate);
  };

  onChangeProductWeightType = (weightType) => {
    this.setState({weightType}, this.checkAllDate);
  };

  onChangeProductExpire = (expire) => {
    this.setState({expire}, this.checkAllDate);
  };

  render() {
    const {isActiveButton, expire} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.functionBar}>
            <View style={styles.functionBarAdd}>
              <TouchableOpacity onPress={this.back}>
                <ImageBackground
                  source={ICONS.NAVIGATE_BACK}
                  style={styles.functionBarNavButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.functionBarSettings}>
              <TouchableOpacity>
                <ImageBackground
                  source={ICONS.SETTINGS}
                  style={styles.functionBarSettingsButton}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Добавление</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.mainContent}>

            <ProductName onChange={this.onChangeProductName}/>

            <View style={styles.productExpireInfo}>
              <ExpireDate date={expire} onChange={this.onChangeProductExpire}/>
            </View>

            <View style={styles.productCategoryInfo}>
              <ProductCategory onChange={this.onChangeProductCategory}/>
            </View>

            {/*<View style={styles.productHolderInfo}>*/}
            {/*  <ProductHolder/>*/}
            {/*</View>*/}

            <View style={styles.productWeightInfo}>
              <ProductWeight
                onChangeWeightType={this.onChangeProductWeightType}
                onChangeWeight={this.onChangeProductWeight}
              />
            </View>

            {/*<View style={styles.productDescriptionBox}>*/}
            {/*  <ProductDescription/>*/}
            {/*</View>*/}

            {/*<View style={styles.productNotificationBox}>*/}
            {/*  <ProductNotification/>*/}
            {/*</View>*/}

            <View style={styles.addProductBox}>
              <Button
                title='Добавить'
                color='#007AFF'
                style={styles.addProductButton}
                disabled={!isActiveButton}
                onPress={this.add}/>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
  },

  header: {
    marginTop: getStatusBarHeight() + 10,
    height: '18%',
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: COLORS.MATTWHITE,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: '4.27%',
    marginRight: '4.27%',
  },

  functionBar: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  functionBarAdd: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  functionBarNavButton: {
    width: 8,
    height: 16,
  },

  functionBarSettings: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  functionBarSettingsButton: {
    width: 24,
    height: 24,
  },

  titleBar: {
    marginTop: 12,
    marginBottom: 12,
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: 32,
    lineHeight: 38,
    color: COLORS.BLACK,
  },

  mainContent: {
    marginHorizontal: 16,
    flex: 1,
    paddingTop: 16,
  },

  addProductPhoto: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  addProductPhotoIcon: {
    width: 24,
    height: 24,
  },

  productExpireInfo: {
    width: '100%',
    height: 48,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productCategoryInfo: {
    width: '100%',
    height: 48,
    marginTop: 16,
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  productHolderInfo: {
    width: '100%',
    height: 48,
    marginTop: 12,
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  productWeightInfo: {
    width: '100%',
    height: 48,
    marginTop: 12,
  },

  productDescriptionBox: {
    width: '100%',
    height: 120,
    marginTop: 12,
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
  },

  productNotificationBox: {
    width: '100%',
  },

  addProductBox: {
    marginBottom: 44,
  },

  addProductButton: {},
});

export default connect(
  null,
  dispatch => ({
    add: product => dispatch(addProduct(product)),
  }),
)(AddProduct);
