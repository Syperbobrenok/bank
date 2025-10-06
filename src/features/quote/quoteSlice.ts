import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/quoteAction.ts";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Pending...')
            .addCase(fetchQuote.rejected, () => 'Failed to fetch quote')
            .addCase(fetchQuote.fulfilled, (_state, action) => action.payload)
    }
})

// type: 'quote/putQuote'
export default quoteSlice.reducer;