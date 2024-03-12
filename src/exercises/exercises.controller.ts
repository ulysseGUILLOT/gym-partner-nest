import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { Exercise } from './interfaces/exercise.interface';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get(':id')
  findById(@Param('id') id: string): Exercise {
    return this.exercisesService.findById(id);
  }

  @Get()
  findAll(): Exercise[] {
    return this.exercisesService.findAll();
  }

  @Post()
  createExercise(@Body() newExercise) {
    return this.exercisesService.create(newExercise);
  }

  @Patch(':id')
  updateExercise(@Param('id') id: string, @Body() exercise) {
    return this.exercisesService.update(id, exercise);
  }

  @Delete(':id')
  deleteExercise(@Param('id') id: string) {
    return this.exercisesService.delete(id);
  }
}
