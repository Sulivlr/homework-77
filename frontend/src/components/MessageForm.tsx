import React, {useState} from 'react';
import {MessageMutation} from '../types';
import {Button, Grid, TextField} from '@mui/material';
import FileInput from "../UI/FileInput/FileInput";

interface MessageFormProps {
    onSubmit: (mutation: MessageMutation) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({onSubmit}) => {


    const [state, setState] = useState<MessageMutation>({
        message: '',
        author: '',
        image: null
    });

    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault();
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
                    <Button sx={{mb: 3}} type="submit" color="info" variant="contained">Save</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default MessageForm;
