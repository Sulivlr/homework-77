import {useAppDispatch, useAppSelector} from '../app/hooks';
import {MessageMutation} from '../types';
import {createMessage} from '../features/messagesThunk';
import {Typography} from '@mui/material';
import MessageForm from './MessageForm';
import {selectCreating} from "../features/messagesSlice";

const NewMessage = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreating);
  const onFormSubmit = async (msgMutation: MessageMutation) => {
    await dispatch(createMessage(msgMutation));
  };

  return (
    <>
      <Typography sx={{mb: 2}}  variant="h5">New Message</Typography>
      <MessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>
    </>
  );
};

export default NewMessage;