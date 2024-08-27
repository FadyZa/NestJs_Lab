import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/core/schema/article.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]), CloudinaryModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule { }
