import { Module } from '@nestjs/common';
import { NotificationsModule } from 'src/infra/notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
