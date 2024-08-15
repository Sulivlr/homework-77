import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Message, MessageMutation} from './types';

const fileName = './db.json';
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (error) {
      data = []
    }
  },
  async getMessages () {
    return data;
  },

  async addMessages(item: MessageMutation) {
    const message: Message = {
      id: crypto.randomUUID().toString(),
      ...item,
    };
    data.push(message);
    await this.save();
    return message;
  },
  async save() {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
  }
};

export default fileDb;