import { Controller, Get } from '@nestjs/common';

import { AppService } from '@services/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  HelloWorld() {
    return this.appService.getHello();
  }
}

export default AppController;
