import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc"
);

const logger = new Logger();

const notificationService = new NotificationService([
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger),
]);

notificationService.notify(user, "Ваш платіж оброблено успішно!");
