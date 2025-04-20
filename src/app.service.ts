import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Info(): string {
    return 'This is a Sales Board';
  }
}
