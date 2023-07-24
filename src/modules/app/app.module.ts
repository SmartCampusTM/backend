import { StudentsService } from './../../services/students/students.service';
import { StudentsController } from './../../controllers/students/students.controller';
import { StudentModule } from './../students/student.module';
import { Module } from '@nestjs/common';

import { AppController } from '@controllers/app/app.controller';

import { ClassesModule } from '@modules/classes/classes.module';
import { UsersModule } from '@modules/users/users.module';

import { AppService } from '@services/app/app.service';

@Module({
  imports: [UsersModule, ClassesModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
