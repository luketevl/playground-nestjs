import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MytestService {
  constructor(private configService: ConfigService) {
    console.log(configService.get('get config'));
  }
  test() {
    return 'Hello Test!';
  }
}
