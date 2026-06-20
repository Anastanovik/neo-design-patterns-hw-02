// TODO: Implement the PushNotification class

import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class PushNotification implements INotificationChannel {
  constructor(private readonly logger: ILogger) {}

  send(recipient: User, message: string): void {
    this.logger.log(`Sending PUSH to ${recipient.deviceToken}`);
    console.log(`Push sent to ${recipient.deviceToken}: ${message}`);
  }
}