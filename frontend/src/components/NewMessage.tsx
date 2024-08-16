import {Typography} from '@mui/material';
import MessageForm from './MessageForm';

const NewMessage = () => {

  return (
    <>
      <Typography sx={{mb: 2}}  variant="h5">New Message</Typography>
      <MessageForm/>
    </>
  );
};

export default NewMessage;