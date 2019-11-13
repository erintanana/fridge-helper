import React, {PureComponent} from 'react';
import {ImageBackground, Text, TouchableOpacity, View, Platform, DatePickerIOS} from 'react-native';
import PropTypes from 'prop-types';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import i18n from 'i18n-js';

import * as ICONS from '../../../constants/icons';
import * as COLORS from '../../../constants/colors';

class ExpireDate extends PureComponent {

  static propTypes = {
    date: PropTypes.object,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      minDate: props.date,
    };
  }


  showCalendar = () => {
    this.setState({
      show: true,
    });
  };

  setExpire = (date) => {
    const {onChange} = this.props;
    const expireDate = moment(date);

    onChange(expireDate);
  };

  setDate = (event, date) => {
    this.setState({
      show: false,
    }, this.setExpire);
  };

  render() {

    const {date} = this.props;
    const {show, minDate} = this.state;
    const Picker = Platform.select({
      // ios: DatePickerIOS,
      default: RNDateTimePicker,
    });
    const value = (date ? date : minDate).toDate();

    return (
      <TouchableOpacity onPress={this.showCalendar} style={styles.container}>
        <View style={styles.productExpireBox}>
          <View style={styles.productExpireDate}>
            <ImageBackground source={ICONS.CALENDAR} style={styles.productExpireDateIcon}/>
          </View>

          <View style={styles.productExpireDateFrom}>
            {show && <Picker value={value}
                             mode={'date'}
                             is24Hour
                             display={'calendar'}
                             onChange={this.setDate}
                             minimumDate={minDate}
            />
            }
            <Text>
              <Text style={styles.productExpireDateTitle}>{i18n.t('ADD_PRODUCT.DATE')}</Text>
              {
                date ?
                  <Text style={styles.productExpireDateTitle}>{date.toDate().toLocaleDateString()}</Text>
                  : null
              }
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }

}

const styles = {
  container: {
    width: '100%',
  },

  productExpireBox: {
    width: '100%',
    borderColor: COLORS.LIGHTLAVENDER,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productExpireDate: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productExpireDateIcon: {
    width: 24,
    height: 24,
  },

  productExpireDateFrom: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  productExpireDateTitle: {
    flexWrap: 'wrap',
  },
};

export default ExpireDate;
