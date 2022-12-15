import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';

import { DatabaseModule } from 'src/infra/database/database.module';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class NotificationsModule {}
