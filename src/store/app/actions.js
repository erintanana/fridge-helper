import {createAction} from 'redux-actions';
import * as RNLocalize from 'react-native-localize';

import * as TYPES from './types';
import {setI18nConfig} from '../../modules/translation';

const changeSessionAction = createAction(TYPES.SET_SESSION_NUMBER);
const setLoadingStatusAction = createAction(TYPES.SET_LOADING_STATUS);

export const incrementSessionAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const {
      app: {session},
    } = state;
    const currentSession = 1 + session;
    dispatch(changeSessionAction(currentSession));
  };
};

export const loadingFinished = () => {
  return dispatch => {
    dispatch(setLoadingStatusAction(false));
  };
};

export const appInit = () => {
  return () => {
    setI18nConfig();
    RNLocalize.addEventListener('change', setI18nConfig);
  };
};

export const appClose = () => {
  return () => {
    RNLocalize.removeEventListener('change', setI18nConfig);
  };
};
