import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassesService {
  
  createClass(): string {
    return 'OK';
  }

  classes(): string {
    return 'OK';
  }

  findClass(): string {
    return 'OK';
  }

  updateClass(): string {
    return 'OK';
  }

  deleteClass(): string {
    return 'OK';
  }
}
