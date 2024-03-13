import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: any[] = [
        { id: 1, name: 'Ulysse GUILLOT', age: 24 },
        { id: 2, name: 'Damien DUPONT', age: 28 },
        { id: 3, name: 'Louis PIERRE', age: 40 },
    ];

    addUser(userData: any): any {
        const newUser = { ...userData, id: this.users.length + 1 };
        this.users.push(newUser);
        return newUser;
    }

    getUsers(): any[] {
        return this.users;
    }
}