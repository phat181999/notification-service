import { InputType, Field } from '@nestjs/graphql';
import { NotificationType } from 'src/share/interface/notification-type.enum';

@InputType()
export class CreateNotificationInput {
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
  created_at: string; 

  @Field()
  updated_at: string; 
}
