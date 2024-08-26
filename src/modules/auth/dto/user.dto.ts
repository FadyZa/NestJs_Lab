/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class SignUpDto {

    @IsString()
    @MaxLength(10)
    @MinLength(3)
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNumber()
    age: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}

export class SignInDto {

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}
