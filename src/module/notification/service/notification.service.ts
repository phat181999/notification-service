import { Injectable } from '@nestjs/common';
import { CreateNotificationInput } from '../dto/create-notification.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateNotificationInput) {
    return this.prisma.notification.create({ data });
  }

  async findAll() {
    return this.prisma.notification.findMany({ orderBy: { created_at: 'desc' } });
  }
}
