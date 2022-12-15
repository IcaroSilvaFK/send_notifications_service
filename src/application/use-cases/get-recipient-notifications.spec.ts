import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'node:crypto';
import { GetRecipientNotifications } from './get-recipients-notifications';

describe('Count recipients notifications', () => {
  it('Should be able to get notification by recipients', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationRepository();
    const getRecipientNotification = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: recipientOne,
    });

    expect(notifications).toHaveLength(3);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: recipientOne }),
        expect.objectContaining({ recipientId: recipientOne }),
        expect.objectContaining({ recipientId: recipientOne }),
      ]),
    );
  });
});
