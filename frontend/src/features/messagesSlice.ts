import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {createMessage, fetchMessages} from "./messagesThunk";

interface MessagesState {
    items: Message[];
    fetchLoading: boolean;
    createLoading: boolean;

}

const initialState: MessagesState = {
    items: [],
    fetchLoading: false,
    createLoading: false,
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

        builder.addCase(createMessage.pending, (state) => {
            state.createLoading = true;
        }).addCase(createMessage.fulfilled, (state) => {
            state.createLoading = false;
        }).addCase(createMessage.rejected, (state) => {
            state.createLoading = false;
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