import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';
import { onboard } from './modules/Onboard/reducer';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'starwars',
      storage: AsyncStorage,
      whitelist: ['onboard'],
    },
    reducers,
  );

  return persistedReducer;
};
