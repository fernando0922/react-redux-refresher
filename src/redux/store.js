import { configureStore } from "@reduxjs/toolkit";
import { bunReducer } from "./reducers/bunReducer";
import cakeReducer from "./reducers/cakeReducer";

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        bun : bunReducer
    }
})

export default store