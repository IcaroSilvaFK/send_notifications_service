import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: ICancelNotificationRequest,
  ): Promise<ICancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
