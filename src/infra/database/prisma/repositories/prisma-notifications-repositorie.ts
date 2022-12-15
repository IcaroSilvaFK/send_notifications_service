import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notifications.create({
      data: raw,
    });
  }

  async save(notification: Notification) {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notifications.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async findById(id: string): Promise<Notification | null> {
    const notification = await this.prismaService.notifications.findUnique({
      where: { id },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return await this.prismaService.notifications.count({
      where: {
        recipientId,
      },
    });
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const allRecipientNotifications =
      await this.prismaService.notifications.findMany({
        where: { recipientId },
      });

    const notifications = allRecipientNotifications.map(
      PrismaNotificationMapper.toDomain,
    );

    return notifications;
  }
}
