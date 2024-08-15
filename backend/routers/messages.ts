import express from "express";
import fileDb from '../fileDb';
import {MessageMutation} from '../types';

const router = express.Router();

router.get("/", async (req, res) => {
  const message = await fileDb.getMessages();
  res.send(message);
});

router.post("/", async (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({"error": "leave a message"});
  }

  const messageMutation:  MessageMutation = {
    author: req.body.author,
    message: req.body.message,
    image: req.body.image,
  }
  const message = await fileDb.addMessages(messageMutation);
  return res.send(message);

});

export default router;