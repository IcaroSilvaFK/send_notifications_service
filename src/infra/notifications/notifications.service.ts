import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateNotificationDto) {
    try {
      await this.prismaService.notifications.create({
        data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    try {
      return this.prismaService.notifications.findMany();
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, data: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
