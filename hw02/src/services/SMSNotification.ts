// TODO: Implement the SMSNotification class
import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class SMSNotification implements INotificationChannel {
  constructor(private readonly logger: ILogger) {}

  send(recipient: User, message: string): void {
    this.logger.log(`Sending SMS to ${recipient.phone}`);
    console.log(`SMS sent to ${recipient.phone}: ${message}`);
  }
}