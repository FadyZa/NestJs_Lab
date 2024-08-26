/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TagsDto } from './dto/tags.dto';
import { Tag } from 'src/core/schema/tag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) { }

    async getAllTags() {
        return await this.tagModel.find();
    }

    async getTagById(id: string) {
        return await this.tagModel.findById(id);
    }

    async addTag(tag: any) {
        await this.tagModel.insertMany(tag)
        return { message: "Added succssfully!", tags: await this.tagModel.find() };
    }

    async removeTag(id: string) {
        const newTags = await this.tagModel.findByIdAndDelete(id);
        return { message: "Removed succssfully!", tags: newTags };
    }

    async updateTag(id: string, newTag: any) {
        const findTag = await this.tagModel.findById(id);
        if (findTag) {
            findTag.name = newTag.name;
            return { message: "Updated succssfully!", tag: findTag };
        } else {
            return { message: "Tag Not Found !" };
        }

    }


}
