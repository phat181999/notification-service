import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from '../service/notification.service';
import { CreateNotificationInput } from '../dto/create-notification.dto';
import { Notification } from '../entities/notification.model';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query(() => [Notification])
  async notifications() {
    return this.notificationService.findAll();
  }

  @Mutation(() => Notification)
  async createNotification(@Args('input') input: CreateNotificationInput) {
    return this.notificationService.create(input);
  }
}
