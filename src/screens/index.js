import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import PureNavigator from '../modules/navigation';
import {appInit, appClose} from '../store/app/actions';

class App extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    onAppInit: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const {onAppInit} = props;

    onAppInit();
  }

  componentWillUnmount() {
    const {onUnmount} = this.props;

    onUnmount();
  }

  render() {
    const {navigation, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <PureNavigator state={navigation} dispatch={dispatch} />
      </View>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    dispatch,
    onAppInit: () => dispatch(appInit()),
    onUnmount: () => dispatch(appClose()),
  }),
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
