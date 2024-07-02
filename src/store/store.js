import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movieSlice from './slice/movieSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  movies: movieSlice,
}));

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;