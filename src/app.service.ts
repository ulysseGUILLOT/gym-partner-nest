import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): string {
    return 'Gym-partner-nest v0.1';
  }
}
