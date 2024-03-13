import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {DynamicUsersModule} from "./users/dynamic-users.module";

@Module({
  imports: [ExercisesModule, DynamicUsersModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
