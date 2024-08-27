// import { ArticleDto } from './dto/article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Article } from 'src/core/schema/article.schema';
import { Model } from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import { ArticleDto } from './dto/article.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

cloudinary.config({
  cloud_name: "ddoniqytm",
  api_key: "862491472187771",
  api_secret: "iC5qjVEjYALHKwWHEsPqtK98U5w",
});

@Injectable()
export class ArticlesService {

  constructor(@InjectModel(Article.name) private articleModel: Model<Article>, private readonly cloudinaryService: CloudinaryService) { }


  async create(body: ArticleDto, img: Express.Multer.File, imgs: Express.Multer.File[], user: any) {

    // Upload the cover image
    const imgRes = await this.cloudinaryService.uploadFile(img)

    // upload multiple images
    let arrOfImgs = [];
    for (const ele of imgs) {
      const oneImg = await this.cloudinaryService.uploadFile(ele)
      arrOfImgs.push(oneImg.secure_url);
    }

    await this.articleModel.insertMany({
      ...body, coverImage: imgRes.secure_url,
      images: arrOfImgs, author: user.id
    });
    return { message: "Added Successfully!", articles: await this.articleModel.find() };
  }



  async uploadImg(imgs: Express.Multer.File[]) {
    let arrOfImgs = [];

    for (const img of imgs) {
      const imgRes = await this.cloudinaryService.uploadFile(img)
      arrOfImgs.push(imgRes.secure_url);
    }
    return { message: "Added Successfully!", arrOfImgs };
  }


  async findAll() {
    return await this.articleModel.find().populate('author', "name email").populate('tagList', 'name');
  }

  async findOne(id: string) {
    return await this.articleModel.findById(id).populate('author', "name email").populate('tagList', 'name');
  }

  async update(id: string, body: any) {
    return { message: "Updated Succussfully!", Article: await this.articleModel.findByIdAndUpdate(id, body, { new: true }) }
  }

  async remove(id: string) {
    return { message: "Deleted Succussfully!", DeletedArticle: await this.articleModel.findByIdAndDelete(id) };
  }
}
