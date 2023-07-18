import { Module } from '@nestjs/common';

import { AppController } from '@controllers/app/app.controller';
import { ClassesController } from '@controllers/classes/classes.controller';
import { UsersController } from '@controllers/users/users.controller';

import { ClassesModule } from '@modules/classes/classes.module';
import { UsersModule } from '@modules/users/users.module';

import { AppService } from '@services/app/app.service';
import { ClassesService } from '@services/classes/classes.service';
import { UsersService } from '@services/users/users.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  imports: [/*UsersModule, ClassesModule*/],
  controllers: [
    AppController,
    UsersController,
    /*ClassesController,*/
  ],
  providers: [AppService, UsersService,/*, ClassesService,*/ PrismaService],
})

export class AppModule {}
