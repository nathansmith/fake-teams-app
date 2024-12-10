import type { IChatMessage } from '~/common/ChatList/ChatMessage';
import type { IFileItem } from '~/common/FileList';
import type { IPhotoItem } from '~/common/PhotoList';

export interface IConversation {
  chatList: IChatMessage[];
  fileList: IFileItem[];
  photoList: IPhotoItem[];
  title: string;
}
