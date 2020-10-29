// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Main from './Main'
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import { MenuProvider } from 'react-native-popup-menu';



import rootReducer from './reducers/index'


// let store = createStore(rootReducer, applyMiddleware(thunk))

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);



export default function App() {

  // useSelector(state => state.loggedIn)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}
      //loading={}
      >
        <MenuProvider>
          <Main />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
}

