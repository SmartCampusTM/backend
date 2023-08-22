import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import UsersModule from '@/users/users.module';

import AuthController from '@/auth/auth.controller';

import AuthService from '@/auth/auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_TOKEN,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export default class AuthModule {}
