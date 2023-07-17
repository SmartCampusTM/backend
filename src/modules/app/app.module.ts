import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app/app.controller';
import { AppService } from '@/services/app/app.service';
import { CatsModule } from '@/modules/cats/cats.module';
import { UsersController } from '@/controllers/users/users.controller';
import { UsersService } from '@/services/users/users.service';
import { CatsController } from '@/controllers/cats/cats.controller';
import { CatsService } from '@/services/cats/cats.service';
import { ClassesModule } from '@/modules/classes/classes.module';
import { ClassesController } from '@/controllers/classes/classes.controller';
import { ClassesService } from '@/services/classes/classes.service';

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
