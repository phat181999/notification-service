import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NotificationType } from 'src/share/interface/notification-type.enum';

@ObjectType()
export class Notification {
  @Field(() => ID)
  id: string;

  @Field()
  user_id: string;

  @Field(() => NotificationType)
  type: NotificationType;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  related_user_id?: string;

  @Field({ nullable: true })
  chat_id?: string;

  @Field()
  is_read: boolean;

  @Field()
  created_at: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}
