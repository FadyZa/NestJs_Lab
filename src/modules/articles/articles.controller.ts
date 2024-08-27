import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, UseGuards, Request } from '@nestjs/common';
import { ArticlesService } from './articles.service';

import { ArticleDto } from './dto/article.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService, private readonly cloudinaryService: CloudinaryService) { }

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'coverImage', maxCount: 1 },
      { name: 'images', maxCount: 5 },
    ]),
  )
  async create(
    @Body() article: any,
    @Request() req: any,
    @UploadedFiles()
    files: {
      coverImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
    }) {

    return this.articlesService.create(article, files.coverImage[0], files.images, req.user);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', 5))
  async uploadImage(@UploadedFiles() images: Express.Multer.File[]) {
    return this.articlesService.uploadImg(images);
  }





  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticle: any) {
    return this.articlesService.update(id, updateArticle);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
