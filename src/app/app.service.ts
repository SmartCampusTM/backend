import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  sendHeartbeat(): string {
    return 'OK';
  }
}
