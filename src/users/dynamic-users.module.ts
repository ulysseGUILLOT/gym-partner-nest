import { Module, DynamicModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({})
export class DynamicUsersModule {
    static forRoot(): DynamicModule {
        return {
            module: DynamicUsersModule,
            controllers: [UsersController],
            providers: [UsersService],
        };
    }
}