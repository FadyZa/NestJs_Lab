import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, MaxLength, maxLength, MinLength } from "class-validator";

export class ArticleDto {


    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    title: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    content: string;

    @IsString()
    @IsNotEmpty()
    coverImage: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    images: string[];
}
