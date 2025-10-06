import {configureStore} from "@reduxjs/toolkit";
import quote from "../features/quote/quoteSlice.ts";
import balance from "../features/account/balanceSlice.ts";

export const store = configureStore({
    reducer: {
        quote, balance
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch