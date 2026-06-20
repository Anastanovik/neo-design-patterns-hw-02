# Design Patterns HW 02 — Система сповіщень (SOLID)

## Опис проєкту

Цей проєкт є рефакторингом системи сповіщень, реалізованої на TypeScript.

Початкова реалізація порушувала принципи SOLID, тому архітектура була змінена з метою приведення її до більш гнучкої та підтримуваної структури.

Система підтримує наступні канали сповіщень:

- Email
- SMS
- Push-повідомлення

Кожен канал реалізовано як окремий клас, що працює через спільний інтерфейс.

## Використані принципи SOLID

### Single Responsibility Principle (SRP)

Кожен клас має одну відповідальність:

- Logger відповідає за логування
- NotificationService відповідає за управління процесом відправки повідомлень
- Кожен канал відповідає лише за відправку свого типу повідомлень

### Open/Closed Principle (OCP)

Система відкрита для розширення, але закрита для модифікації.
Додавання нового каналу не потребує зміни існуючого коду, достатньо створити новий клас, що реалізує інтерфейс INotificationChannel.

### Liskov Substitution Principle (LSP)

Усі реалізації каналів можуть взаємозамінюватися, оскільки реалізують спільний інтерфейс.

### Interface Segregation Principle (ISP)

Інтерфейси розділені на вузькі та спеціалізовані:

- ILogger
- INotificationChannel

### Dependency Inversion Principle (DIP)

Високорівневі модулі не залежать від конкретних реалізацій.
Усі залежності передаються через абстракції.

## Структура проєкту

src/
├── core/
│ └── interfaces.ts
├── models/
│ └── User.ts
├── services/
│ ├── Logger.ts
│ ├── NotificationService.ts
│ ├── EmailNotification.ts
│ ├── SMSNotification.ts
│ └── PushNotification.ts
└── main.ts

## Запуск проєкту

Встановлення залежностей:
npm install

Запуск проєкту:
npx ts-node src/main.ts

## Результат виконання

[LOG]: Sending EMAIL to user@example.com
Email sent to user@example.com: Ваш платіж оброблено успішно!
[LOG]: Sending SMS to +123456789
SMS sent to +123456789: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-123
Push sent to device-token-123: Ваш платіж оброблено успішно!
