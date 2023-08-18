import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private message = 'Hello World';

  getHello(): string {
    return this.message;
  }
}

export default AppService;
