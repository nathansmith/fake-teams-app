import chatList from './chatList';
import fileList from './fileList.json';
import photoList from './photoList.json';
import type { IConversation } from '../types';

export const conversation: IConversation = {
  title: 'UNT Welcome Bot',
  chatList,
  fileList,
  photoList,
};
