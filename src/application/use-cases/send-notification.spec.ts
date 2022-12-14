import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'This is a notification',
      content: 'social',
      category: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
