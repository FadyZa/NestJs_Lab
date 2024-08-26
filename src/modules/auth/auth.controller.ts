/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/user.dto';


@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @Post("register")
    rigester(@Body() newUser: SignUpDto) {
        return this._authService.register(newUser);
    }

    @Post("login")
    login(@Body() user: SignInDto) {
        return this._authService.login(user);
    }
}
