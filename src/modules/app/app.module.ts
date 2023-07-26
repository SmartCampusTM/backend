import { Module } from '@nestjs/common';

import { AppController } from '@controllers/app/app.controller';

import { ClassesModule } from '@modules/classes/classes.module';
import { UsersModule } from '@modules/users/users.module';

import { AppService } from '@services/app/app.service';

import { TeachersModule } from './../teachers/teachers.module';

@Module({
  imports: [UsersModule, ClassesModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
