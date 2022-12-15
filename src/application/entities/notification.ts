import { randomUUID } from 'node:crypto';

import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;
  private _id: string;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
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

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null {
    return this.props.readAt || null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get id(): string {
    return this._id;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }
}
