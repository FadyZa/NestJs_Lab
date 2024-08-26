import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

@Schema({ timestamps: true, versionKey: false })
export class Tag {

    @Prop({ required: true })
    name: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User
}

export const TagSchema = SchemaFactory.createForClass(Tag);