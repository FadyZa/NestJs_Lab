/* eslint-disable prettier/prettier */
import { AuthGuard } from '../auth/auth.guard';
import { TagsDto } from './dto/tags.dto';
import { TagsService } from './tags.service';
import { Body, Controller, Delete, Get, Param, Request, Post, Put, UseGuards } from '@nestjs/common';

@Controller('tags')
export class TagsController {
    constructor(private _tagsService: TagsService) { }

    @Get()
    getAllTags() {
        return this._tagsService.getAllTags()
    }

    @Get(':id')
    getTagById(@Param("id") id: string) {
        return this._tagsService.getTagById(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    addTag(@Body() newTag: TagsDto, @Request() req: any) {
        return this._tagsService.addTag(newTag, req.user)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    removeTag(@Param("id") id: string) {
        return this._tagsService.removeTag(id)
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    updateTag(@Param("id") id: string, @Body() newTag: any) {
        return this._tagsService.updateTag(id, newTag);
    }




}
