import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages} from "./messagesThunk";

interface MessagesState {
    items: Message[];
    fetchLoading: boolean;
}

const initialState: MessagesState = {
    items: [],
    fetchLoading: false,
};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
            state.fetchLoading = false;
            state.items = messages;
        }).addCase(fetchMessages.rejected, (state) => {
            state.fetchLoading = false;
        });
    },
    selectors: {
        selectMessages: (state) => state.items,
        selectFetching: (state) => state.fetchLoading,
    }
});


export const messagesReducer = messagesSlice.reducer;
export const {selectMessages,
    selectFetching
} = messagesSlice.selectors;