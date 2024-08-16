import {Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectFetching, selectMessages} from "./messagesSlice";
import {useEffect} from "react";
import {fetchMessages} from "./messagesThunk";
import MessageItem from "../components/MessageItem";
import Spinner from "../components/Spinner/Spinner";

const Messages = () => {

    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);
    const fetchLoading = useAppSelector(selectFetching);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return fetchLoading ? <Spinner /> : (
        <Grid container direction="column" gap={3}>
            <Grid item container>
                <Grid item sx={{mt: 2}}>
                    <Typography variant="h4">
                        Messages
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container gap={3}>
                {messages.map(message => (
                    <MessageItem
                        key={message.id}
                        author={message.author}
                        message={message.message}
                        image={message.image}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Messages;