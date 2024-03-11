import {Injectable, NotFoundException} from '@nestjs/common';
import {Exercise} from "./interfaces/exercise.interface";

@Injectable()
export class ExercisesService {
    exercises = [
        {
            id: 1,
            name: 'Traction',
            description: 'Traction à la barre'
        },
        {
            id: 2,
            name: 'Chest press',
            description: 'Presse à pectoraux technogym, unilatérale'
        },
        {
            id: 3,
            name: 'Leg extension',
            description: 'Extension des quadriceps sur machine technogym'
        },
    ]

    findById(id: string) {
        return this.exercises.find(exercise => exercise.id === Number(id));
    }

    findAll(): any[] {
        return this.exercises;
    }

    create(exercise: Exercise) {
        // @ts-ignore
        this.exercises = [...this.exercises, exercise];
    }

    update(id: string, exercise: Exercise) {
        // recuperer l'exercice
        const exerciseToUpdate = this.exercises.find(exercise => exercise.id === Number(id));
        if(!exerciseToUpdate){
            return new NotFoundException('');
        }
        // appliquer les modif
        if (exercise.name) {
            exerciseToUpdate.name = exercise.name;
        }
        if (exercise.description) {
            exerciseToUpdate.description = exercise.description;
        }
        const  updatedExercises = this.exercises.map(e => e.id !== Number(id) ? e : exerciseToUpdate);
        this.exercises = [...updatedExercises];
        return {exercise : exerciseToUpdate}
    }

    delete(id: string){
        this.exercises = [...this.exercises.filter(e => e.id !== Number(id))]
        return this.exercises.length
    }
}
