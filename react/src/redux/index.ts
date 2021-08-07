import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import xepTkbSlice from './xepTkb/slice';

// Sometimes new updates will break the app, due to stale data stored in localstorage
// This is for updating new key for data stored in localstorage
const keyVersions = ['dkhp-uit-react-v-1'] as const;

// only keyVersions[0] is the key being used, all are staled and need to be removed
// @NOTE: More official approach though: https://blog.bam.tech/developer-news/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
// keyVersions.slice(1).forEach((key) => {
//   localStorage.removeItem('persist:' + key);
// });

const persistConfig = {
  key: keyVersions[0],
  storage,
  // whitelist: [xepTkbSlice.name],
} as const;

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      // make redux-toolkit compatible with redux-persist: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
      serializableCheck: false,
    }),
  reducer: {
    [xepTkbSlice.name]: persistReducer(persistConfig, xepTkbSlice.reducer),
  },
});

export const persistor = persistStore(store);
