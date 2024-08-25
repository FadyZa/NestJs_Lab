/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
    usersArr: UserDto[] = [
        {
            id: 1,
            name: "fady",
            email: "fady@gmail.com",
            age: 23,
            password: "Fady1234567#"
        }
    ]

    register(newUser: UserDto): any {
        this.usersArr.push(newUser)
        return { message: "new user added!", users: this.usersArr }

    }

    login(user: any): any {
        const findUser = this.usersArr.find((ele) => ele.email == user.email);
        if (findUser) {
            if (findUser.password == user.password) {
                return { message: `Welcome ${findUser.name}, you are signed up!`, }
            } else {
                return { message: `wrong password` }
            }
        } else {
            return { message: `wrong Email!, if you do not have an account please signup first` }
        }
    }
}
