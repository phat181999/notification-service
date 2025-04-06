import { registerEnumType } from '@nestjs/graphql';

export enum NotificationType {
  MESSAGE = 'MESSAGE',
  FRIEND_REQUEST = 'FRIEND_REQUEST',
  MENTION = 'MENTION',
  OTHER = 'OTHER',
}

registerEnumType(NotificationType, {
  name: 'NotificationType',
});
