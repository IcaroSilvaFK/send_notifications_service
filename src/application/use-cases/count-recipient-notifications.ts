import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface ICountRecipientRequest {
  recipientId: string;
}

type ICountRecipientResponse = { count: number };

@Injectable()
export class CountRecipientNotification {
  constructor(
    private readonly notificationRepository: NotificationsRepository,
  ) {}

  async execute({
    recipientId,
  }: ICountRecipientRequest): Promise<ICountRecipientResponse> {
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
