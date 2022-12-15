import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'node:crypto';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('Should a count notification by recipients', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationRepository();
    const countRecipientNotification = new CountRecipientNotification(
      inMemoryNotificationsRepository,
    );

    const recipientOne = randomUUID();

    makeNotification();

    await inMemoryNotificationsRepository.create(
      makeNotification({
        recipientId: recipientOne,
      }),
    );
    await inMemoryNotificationsRepository.create(
      makeNotification({
        recipientId: recipientOne,
      }),
    );
    await inMemoryNotificationsRepository.create(
      makeNotification({
        recipientId: recipientOne,
      }),
    );

    const countNotifications = await countRecipientNotification.execute({
      recipientId: recipientOne,
    });

    expect(countNotifications.count).toEqual(3);
  });
});
