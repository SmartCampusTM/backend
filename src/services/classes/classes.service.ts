import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassesService {
  helloWorld(): string {
    return 'HelloWorld';
  }
}
