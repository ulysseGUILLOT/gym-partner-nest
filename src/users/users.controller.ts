import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    addUser(@Body() userData: any): string {
        const newUser = this.usersService.addUser(userData);
        return `Utilisateur ajouté avec succès : ${JSON.stringify(newUser)}`;
    }

    @Get()
    getUsers(): any[] {
        return this.usersService.getUsers();
    }
}