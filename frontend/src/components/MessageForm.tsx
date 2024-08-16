import React, {useState} from 'react';
import {MessageMutation} from '../types';
import {Grid, TextField} from '@mui/material';
import FileInput from "../UI/FileInput/FileInput";
import {LoadingButton} from "@mui/lab";
import SaveIcon from '@mui/icons-material/SaveAs';
import {useAppDispatch} from "../app/hooks";
import {createMessage, fetchMessages} from "../features/messagesThunk";


interface MessageFormProps {
    onSubmit: (mutation: MessageMutation) => void;
    isLoading: boolean;
}

const MessageForm: React.FC<MessageFormProps> = ({onSubmit}) => {

const dispatch = useAppDispatch();
    const [state, setState] = useState<MessageMutation>({
        message: '',
        author: '',
        image: null
    });

    const formSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await dispatch(createMessage(state));
        dispatch(fetchMessages());
        onSubmit({...state});
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = event.target;
        const value = files && files[0] ? files[0] : null;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (

        <form autoComplete="off" onSubmit={formSubmit}>
            <Grid container direction="column" spacing={2}>

                <Grid item>
                    <TextField
                        id="message"
                        label="Message"
                        value={state.message}
                        onChange={inputChange}
                        name="message"
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item>
                    <TextField
                        id="author"
                        label="Author"
                        value={state.author}
                        name="author"
                        onChange={inputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <FileInput
                        label="Image"
                        name="image"
                        onChange={fileInputChangeHandler}
                    />
                </Grid>
                <Grid item>
                    <LoadingButton type="submit" loadingPosition="start" startIcon={<SaveIcon />} variant="contained">
                        Save
                    </LoadingButton>
                </Grid>
            </Grid>
        </form>
    );
};

export default MessageForm;
