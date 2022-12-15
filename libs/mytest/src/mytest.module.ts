import { Module } from '@nestjs/common';
import { MytestService } from './mytest.service';

@Module({
  providers: [MytestService],
  exports: [MytestService],
})
export class MytestModule {}
