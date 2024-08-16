import React from "react";
import {Card, CardContent, CardHeader, Grid} from "@mui/material";

interface Props {
    author?: string;
    message: string;
    image?: string;
}

const MessageItem: React.FC<Props> = ({author, message, image}) => {
    return (
        <Grid item xs lg={12}>
            <Card>
                <CardHeader title={`Author: ${author}`} />
                <CardContent>
                    <strong>Message: </strong>
                    <i>{message}</i>
                </CardContent>
                <CardContent>{image}</CardContent>
            </Card>
        </Grid>
    );
};

export default MessageItem;