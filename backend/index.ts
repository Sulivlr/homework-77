import express from 'express';
import cors from 'cors';
import messageRouter from './routers/messages'
import config from './config';
import fileDb from './fileDb';

const app = express();
const port = 8000;



app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/messages', messageRouter);

const run = async () => {
  await fileDb.init();
  app.listen(port, () => {
    console.log('Listening on port', port);
  })
}

void run();
