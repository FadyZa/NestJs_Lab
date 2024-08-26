/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        private _jwtService: JwtService
    ) { }

    async register(body: SignUpDto) {
        const findUser = await this.userModel.findOne({ email: body.email })
        if (findUser) throw new HttpException("You are already signed up!", HttpStatus.CONFLICT);
        body.password = await bcrypt.hash(body.password, 8)
        await this.userModel.insertMany(body)
        return { message: "new user added!", user: await this.userModel.findOne({ email: body.email }) }
    }

    async login(body: SignInDto) {
        const findUser = await this.userModel.findOne({ email: body.email })

        if (findUser) {
            const isMatch = await bcrypt.compare(body.password, findUser.password);
            if (isMatch) {
                return {
                    message: `Welcome ${findUser.name}, you are signed up!`,
                    token: this._jwtService.sign({ id: findUser._id, email: findUser.email },
                        { secret: "privateKey" })
                }
            } else {
                return { message: `wrong password` }
            }
        } else {
            return { message: `wrong Email!, if you do not have an account please signup first` }
        }
    }
}
