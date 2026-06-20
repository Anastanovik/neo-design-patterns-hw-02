import { ILogger } from "../core/interfaces";

export class Logger implements ILogger {
  private static readonly PREFIX = "[LOG]";

  log(message: string): void {
    console.log(`${Logger.PREFIX}: ${message}`);
  }
}