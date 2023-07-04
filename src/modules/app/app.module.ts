import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app/app.controller';
import { AppService } from '@/services/app/app.service';
import { CatsModule } from '@/modules/cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
