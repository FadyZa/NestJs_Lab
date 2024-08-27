import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './modules/tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ArticlesModule } from './modules/articles/articles.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [TagsModule, AuthModule, ArticlesModule, MongooseModule.forRoot('mongodb://localhost/medium'), CloudinaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
