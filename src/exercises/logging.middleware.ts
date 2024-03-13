import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, ip } = req;
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${method} ${url} - IP: ${ip}\n`;

    const logFilePath = 'logs/exercisesRequests.log';

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Erreur lors de l'écriture dans le fichier de log", err);
      }
    });

    next();
  }
}
