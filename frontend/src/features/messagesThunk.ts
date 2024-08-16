import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message, MessageMutation} from "../types";
import axiosApi from "../../axiosApi";

export const fetchMessages = createAsyncThunk<Message[]>(
    'fetchMessages',
    async () => {
        const {data: messages} = await axiosApi.get<Message[]>('/messages');
        return messages;
    },
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
    'createMessage',
    async (messageMutation) => {
        const formData = new FormData();
        formData.append('author', messageMutation.author);
        formData.append('message', messageMutation.message);
        if (messageMutation.image) {
            formData.append('images', messageMutation.image);
        }
        await axiosApi.post('/messages', formData);
    }
);