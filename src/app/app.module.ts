import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import AppController from '@/app/app.controller';
import AuthController from '@/auth/auth.controller';
import ClassesController from '@/classes/classes.controller';
import ClassroomsController from '@/classrooms/classrooms.controller';
import GradesController from '@/grades/grades.controller';
import UsersController from '@/users/users.controller';

import AppService from '@/app/app.service';
import AuthService from '@/auth/auth.service';
import ClassesService from '@/classes/classes.service';
import ClassroomsService from '@/classrooms/classrooms.service';
import GradesService from '@/grades/grades.service';
import PrismaService from '@/prisma/prisma.service';
import UsersService from '@/users/users.service';

@Module({
  controllers: [
    AppController,
    UsersController,
    ClassesController,
    ClassroomsController,
    GradesController,
    AuthController,
  ],
  providers: [
    AppService,
    PrismaService,
    UsersService,
    ClassesService,
    ClassroomsService,
    GradesService,
    AuthService,
    JwtService,
  ],
})
export default class AppModule {}
