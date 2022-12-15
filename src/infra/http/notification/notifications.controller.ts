import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationDto } from './DTOs/create-notification.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() data: CreateNotificationDto) {
    const { category, content, recipientId } = data;
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
