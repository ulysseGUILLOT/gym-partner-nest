import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { LoggingMiddleware } from '../middlewares/logging.middleware';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
