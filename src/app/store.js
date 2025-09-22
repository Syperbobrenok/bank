import {configureStore} from "@reduxjs/toolkit";
import quote from "../features/quote/quoteSlice.js";
import balance from "../features/account/balanceSlice.js";

export const store = configureStore({
    reducer: {
        quote, balance
    },
});