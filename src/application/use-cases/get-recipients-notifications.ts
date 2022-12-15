import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: IGetRecipientNotificationsRequest) {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
