import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  default(): { message: string } {
    return { message: 'used for retrieving relevant user data.' };
  }
}
