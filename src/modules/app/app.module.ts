import { Module } from '@nestjs/common';

import { AppController } from '@controllers/app/app.controller';
import { CatsController } from '@controllers/cats/cats.controller';
import { ClassesController } from '@controllers/classes/classes.controller';
import { UsersController } from '@controllers/users/users.controller';

import { CatsModule } from '@modules/cats/cats.module';
import { ClassesModule } from '@modules/classes/classes.module';
import { UsersModule } from '@modules/users/users.module';

import { AppService } from '@services/app/app.service';
import { CatsService } from '@services/cats/cats.service';
import { ClassesService } from '@services/classes/classes.service';
import { UsersService } from '@services/users/users.service';

@Module({
  imports: [UsersModule, CatsModule, ClassesModule],
  controllers: [
    AppController,
    UsersController,
    CatsController,
    ClassesController,
  ],
  providers: [AppService, UsersService, CatsService, ClassesService],
})
export class AppModule {}
