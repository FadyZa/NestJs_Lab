import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Tag } from "./tag.schema";
import { User } from "./user.schema";

@Schema({ timestamps: true, versionKey: false })
export class Article {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    slug: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    content: string;

    @Prop()
    coverImage: string;

    @Prop()
    images: string[];

    @Prop()
    likes: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    author: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
    tagList: Tag[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article)