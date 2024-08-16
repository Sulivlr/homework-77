import {useAppDispatch} from '../app/hooks';
import {MessageMutation} from '../types';
import {createMessage} from '../features/messagesThunk';
import {Typography} from '@mui/material';
import MessageForm from './MessageForm';

const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onFormSubmit = async (msgMutation: MessageMutation) => {
    await dispatch(createMessage(msgMutation));
  };

  return (
    <>
      <Typography sx={{mb: 2}}  variant="h5">New Message</Typography>
      <MessageForm onSubmit={onFormSubmit} />
    </>
  );
};

export default NewMessage;