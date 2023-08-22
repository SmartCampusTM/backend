import { Controller, Get } from '@nestjs/common';

import AppService from '@/app/app.service';

@Controller('heartbeat')
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  HelloWorld() {
    return this.appService.sendHeartbeat();
  }
}
