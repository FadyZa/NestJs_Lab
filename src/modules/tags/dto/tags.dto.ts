/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class TagsDto {
    @IsString()
    @MaxLength(20)
    @MinLength(3)
    @IsNotEmpty()
    name: string;
}
