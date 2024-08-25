/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @Post("register")
    rigester(@Body() newUser: UserDto) {
        return this._authService.register(newUser);
    }

    @Post("login")
    login(@Body() user: UserDto) {
        return this._authService.login(user);
    }
}
