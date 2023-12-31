import { Module } from '@nestjs/common';

import { AppController } from '@controllers/app/app.controller';

import { ClassesModule } from '@modules/classes/classes.module';
import { UsersModule } from '@modules/users/users.module';

import { AppService } from '@services/app/app.service';

import { ClassroomsModule } from '../classrooms/classrooms.module';
import { GradesModule } from '../grades/grades.module';
import { StudentsModule } from '../students/student.module';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [
    UsersModule,
    ClassesModule,
    TeachersModule,
    ClassroomsModule,
    GradesModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
