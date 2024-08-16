import React from "react";
import {Card, CardContent, CardHeader, CardMedia, Grid} from "@mui/material";

interface Props {
    author: string;
    message: string;
    image: string | null;
}

const MessageItem: React.FC<Props> = ({author, message, image}) => {
    const imageUrl = image ? `http://localhost:8000/${image}` : null;

    return (
        <Grid item sx={{width: '300px'}}>
            <Card sx={{height: '100%'}}>
                <CardHeader title={`Author: ${author}`} />
                {imageUrl && (
                    <CardMedia
                        title={author}
                        sx={{height: 0, paddingTop: '56%'}}
                        image={imageUrl}
                    />
                )}
                <CardContent>
                    <strong>Message: </strong>
                    <i>{message}</i>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MessageItem;