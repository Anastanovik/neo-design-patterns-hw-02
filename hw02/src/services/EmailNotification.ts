// TODO: Implement the EmailNotification class

import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class EmailNotification implements INotificationChannel {
  constructor(private readonly logger: ILogger) {}

  send(recipient: User, message: string): void {
    this.logger.log(`Sending EMAIL to ${recipient.email}`);
    console.log(`Email sent to ${recipient.email}: ${message}`);
  }
}