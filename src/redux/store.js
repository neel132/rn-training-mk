import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { counterReducer } from "./reducers/counterReducer"
import EncryptedStorage from 'react-native-encrypted-storage';

// We prefer to use EncryptedStorage so that states are securely stored
const persistConfig = {
	key: 'root', // it should be unique
	storage: EncryptedStorage,
}

// Combining the reducers at prior because persistReducer accepts only one reducer
const rootReducer = combineReducers({
	counterReducer: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// middleware configuration is added just to remove the error message on screen.

// we are wrapping around the store using persistStore to create persisted store object,
// which we then supply to PersistGate
const persistor = persistStore(store)

export { store, persistor };
