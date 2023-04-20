import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import category from "./slice/category";
import global from "./slice/global";
import member from "./slice/member";
import modal from "./slice/modal";
import pageSize from "./slice/pageSize";
import posting from "./slice/posting";
import postList from "./slice/postList";
import storeKey from "./slice/storeKey";
import widgets from "./slice/widgets";
import writing from "./slice/writing";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['member', 'writing']
  };

const reducers = combineReducers({
    member: member.reducer,
    modal: modal.reducer,
    category: category.reducer,
    postList: postList.reducer,
    pageSize: pageSize.reducer,
    posting: posting.reducer,
    widgets: widgets.reducer,
    writing: writing.reducer,
    storeKey: storeKey.reducer,
    global: global.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })//.concat(logger),
});