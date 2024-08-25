/* eslint-disable prettier/prettier */
import { TagsDto } from './dto/tags.dto';
import { TagsService } from './tags.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('tags')
export class TagsController {
    constructor(private _tagsService: TagsService) { }

    @Get()
    getAllTags() {
        return this._tagsService.getAllTags()
    }

    @Get(':id')
    getTagById(@Param("id", ParseIntPipe) id: number) {
        return this._tagsService.getTagById(id);
    }

    @Post()
    addTag(@Body() newTag: TagsDto) {
        return this._tagsService.addTag(newTag)
    }

    @Delete(':id')
    removeTag(@Param("id", ParseIntPipe) id: number) {
        return this._tagsService.removeTag(id)
    }

    @Put(":id")
    updateTag(@Param("id", ParseIntPipe) id: number, @Body() newTag: any) {
        return this._tagsService.updateTag(id, newTag);
    }




}
