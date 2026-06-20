import { INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  constructor(
    private readonly channels: INotificationChannel[]
  ) {}

  notify(recipient: User, message: string): void {
    for (const channel of this.channels) {
      channel.send(recipient, message);
    }
  }
}