import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as ROUTES from '../constants/routes';
import {incrementSessionAction, loadingFinished} from '../store/app/actions';

class Loading extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        navigate: PropTypes.func.isRequired,
        incrementSessionAction: PropTypes.func.isRequired,
        loadingFinished: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const {incrementSessionAction, loadingFinished} = this.props;

        incrementSessionAction();
        loadingFinished();
    }

    componentDidUpdate(prevProps) {
        const {isLoading} = this.props;
        if (prevProps.isLoading !== isLoading && !isLoading) {
            this.props.navigation.navigate(ROUTES.DASHBOARD);
        }
    }

    render() {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }
}

export default connect(
    state => ({
        isLoading: state.app.isLoading,
    }),
    {
        incrementSessionAction,
        loadingFinished,
    },
)(Loading);
