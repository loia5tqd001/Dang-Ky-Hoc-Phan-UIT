import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import xepTkbReducer, { xepTkbName } from './xepTkb/reducer';

// Sometimes new updates will break the app, due to stale data stored in localstorage
// This is for updating new key for data stored in localstorage
const keyVersions = ['dkhp-uit-react-v-1'];

// only keyVersions[0] is the key being used, all are staled and need to be removed
// @NOTE: More official approach though: https://blog.bam.tech/developer-news/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
keyVersions.slice(1).forEach((key) => {
  localStorage.removeItem('persist:' + key);
});

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    thunk: false,
    // make redux-toolkit compatible with redux-persist: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
    serializableCheck: false,
  }),
  reducer: persistReducer(
    {
      key: keyVersions[0],
      storage,
      whitelist: [xepTkbName],
    },
    combineReducers({
      [xepTkbName]: xepTkbReducer,
    }),
  ),
});

export const persistor = persistStore(store);
