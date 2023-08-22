import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  private message = 'OK';

  sendHeartbeat(): string {
    return this.message;
  }
}
