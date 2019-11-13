import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Switch} from 'react-native-switch';
import i18n from 'i18n-js';

import * as COLORS from '../../../constants/colors';

class ProductNotification extends PureComponent {

  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
  };

  state = {
    notification: true,
  };

  onValueChange = (notification) => {
    this.setState({notification});
  };

  render() {

    const {notification} = this.state;

    return (
      <View style={styles.productNotificationWrapper}>
        <View>
          <Text>{i18n.t('ADD_PRODUCT.NOTIFICATIONS')}</Text>
        </View>
        <View>
          <Switch
            value={notification}
            onValueChange={this.onValueChange}
            changeValueImmediately
            disabled={false}
            circleSize={20}
            barHeight={24}
            backgroundActive={COLORS.AZURE}
            backgroundInactive={COLORS.MATTWHITE}
            circleActiveColor={COLORS.WHITE}
            circleInActiveColor={COLORS.WHITE}
            circleBorderWidth={0}
            innerCircleStyle={styles.innerCircleStyle}
            outerCircleStyle={null}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={1.5}
            switchRightPx={1.5}
            switchWidthMultiplier={2.5}
          />
        </View>
      </View>
    );
  }

}

const styles = {

  productNotificationWrapper: {
    height: 112,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 19,
  },

  innerCircleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },

};

export default ProductNotification;
