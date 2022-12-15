interface CreateNotificationDto {
  id: string;
  recipientId: string;
  content: string;
  category: string;
  readAt: Date | null;
  createdAt: Date;
}

export class Notification {
  notifications: CreateNotificationDto[] = [];
}
