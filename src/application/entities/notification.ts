import { randomUUID } from 'node:crypto';

import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;
  private _id: string;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null {
    return this.props.readAt || null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get id(): string {
    return this._id;
  }
}
