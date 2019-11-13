import React, {PureComponent, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import i18n from 'i18n-js';

import * as ICONS from '../constants/icons';
import ProductItem from '../components/product-item';
import * as ROUTES from '../constants/routes';
import * as COLORS from '../constants/colors';
import ProductHiddenItem from '../components/product-hidden-item';
import moment from 'moment';

class Dashboard extends PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      nameFilter: '',
      items: props.items,
      initialItems: props.items,
    };
  }

  nameRef = createRef();

  static getDerivedStateFromProps(props, state) {
    if (props.items !== state.initialItems) {
      return {
        initialItems: props.items,
        items: props.items.filter(el => el.name.includes(state.nameFilter)),
      };
    }
    return null;
  }


  renderItem = ({item}) => {
    const {category, name, weight, weightType, expire, id} = item;
    const diffTime = moment(expire)
      .diff(new Date());
    const duration = moment.duration(diffTime);
    return (
      <ProductItem
        icon={ICONS[category]}
        category={i18n.t(`ADD_PRODUCT.CATEGORY.${category}`)}
        name={name}
        weight={weight + " " + i18n.t(`ADD_PRODUCT.WEIGHT.${weightType}`)}
        days={duration.days()}
        id={id}
      />
    );
  };

  renderHiddenItem = ({item}) => {
    return (
      <ProductHiddenItem item={item}/>
    );
  };

  getKey = item => {
    return item.id;
  };

  setName = (text) => {
    const {items} = this.props;
    const name = text.trim();
    this.setState({name, items: items.filter(el => el.name.includes(name))});
  };

  add = () => {
    this.props.navigation.navigate(ROUTES.ADD_PRODUCT);
  };

  goToSettings = () => {
  };// to future

  render() {
    const {items} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.functionBar}>
            <View style={styles.functionBarAdd}>
              <TouchableOpacity onPress={this.add} style={styles.border}>
                <ImageBackground
                  source={ICONS.ADD_PRODUCT}
                  style={styles.functionBarAddButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.functionBarSettings}>
              <TouchableOpacity onPress={this.goToSettings}>
                <ImageBackground
                  source={ICONS.SETTINGS}
                  style={styles.functionBarSettingsButton}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Продукты</Text>
          </View>
          <View style={styles.searchingBar}>
            <View style={styles.search}>
              <View>
                <ImageBackground
                  source={ICONS.SEARCH_PRODUCT}
                  style={styles.searchIcon}
                />
              </View>
              <View style={styles.searchTextInput}>
                <TextInput
                  nameRef={this.nameRef}
                  placeholder={i18n.t('DASHBOARD.SEARCH')}
                  onChangeText={this.setName}
                  editable
                  clearTextOnFocus
                />
              </View>
            </View>
            {/*<View style={styles.sortingSearch}>*/}
            {/*    <ImageBackground*/}
            {/*        source={ICONS.SORT_SEARCH}*/}
            {/*        style={styles.sortingSearchIcon}*/}
            {/*    />*/}
            {/*</View>*/}
          </View>
        </View>
        <View style={styles.listProductGroup}>
          <SwipeListView
            data={items}
            keyExtractor={this.getKey}
            renderItem={this.renderItem}
            renderHiddenItem={this.renderHiddenItem}
            leftOpenValue={75}
          />
        </View>
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
    height: '24.6%',
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: COLORS.MATTWHITE,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: '4.27%',
    marginRight: '4.27%',
    marginTop: getStatusBarHeight() + 10,
  },

  functionBar: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  functionBarAdd: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  functionBarAddButton: {
    width: 24,
    height: 24,
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

  searchingBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  search: {
    backgroundColor: COLORS.MATTWHITE,
    width: '100%',
    height: 36,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 6,
  },

  searchTextInput: {
    width: '100%',
  },

  searchIcon: {
    width: 24,
    height: 24,
  },

  sortingSearch: {
    height: 36,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sortingSearchIcon: {
    height: 24,
    width: 24,
  },

  listProductGroup: {
    flex: 1,
    height: 320,
    borderBottomColor: COLORS.MATTWHITE,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: '4.27%',
  },

});

export default connect(
  state => ({
    items: state.products.products,
  }),
)(Dashboard);
