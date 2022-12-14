import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
