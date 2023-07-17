import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app/app.controller';
import { AppService } from '@/services/app/app.service';
import { CatsModule } from '@/modules/cats/cats.module';
import { UsersController } from '@/controllers/users/users.controller';
import { UsersService } from '@/services/users/users.service';
import { CatsController } from '@/controllers/cats/cats.controller';
import { CatsService } from '@/services/cats/cats.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AppController, UsersController, CatsController],
  providers: [AppService, UsersService, CatsService, PrismaService],
})
export class AppModule {}
