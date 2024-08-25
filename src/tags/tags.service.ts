/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TagsDto } from './dto/tags.dto';

@Injectable()
export class TagsService {
    tagsArr: TagsDto[] = [
        {
            name: "first tag",
            id: 1
        },
        {
            name: "second tag",
            id: 2
        },
        {
            name: "third tag",
            id: 3
        }
    ]

    getAllTags(): TagsDto[] {
        return this.tagsArr;
    }

    getTagById(id: number): TagsDto {
        return this.tagsArr.find((tag) => tag.id == id);
    }

    addTag(tag: any): any {
        this.tagsArr.push(tag)
        return { message: "Added succssfully!", tags: this.tagsArr };
    }

    removeTag(id: number): any {
        this.tagsArr = this.tagsArr.filter((tag) => tag.id !== id);
        return { message: "Removed succssfully!", tags: this.tagsArr };
    }

    updateTag(id: number, newTag: any): any {
        const findTag = this.tagsArr.find((tag) => tag.id == id);
        if (findTag) {
            findTag.name = newTag.name;
            return { message: "Updated succssfully!", tags: this.tagsArr };
        } else {
            return { message: "Tag Not Found !" };
        }

    }


}
