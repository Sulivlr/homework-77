import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message} from "../types";
import axiosApi from "../../axiosApi";

export const fetchMessages = createAsyncThunk<Message[]>(
    'fetchMessages',
    async () => {
        const {data: messages} = await axiosApi.get<Message[]>('/messages');
        return messages;
    },
);