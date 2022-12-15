import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { NotificationsModule } from './notification/notifications.module';

@Module({
  imports: [NotificationsModule, DatabaseModule],
})
export class HttpModule {}
