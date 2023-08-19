import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartSlice from './API/cartSlice/cartSlice'
import { api } from './API/api'

const rootReducer = combineReducers({
    [api.reducerPath]: [api.reducer],
    cartSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware)
    }
})

export default store