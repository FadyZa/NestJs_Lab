import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({
    global: true,
    secret: "privateKey",
  }),],
  providers: [AuthService, JwtService],
  controllers: [AuthController]
})
export class AuthModule { }
