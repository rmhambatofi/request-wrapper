import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebRequest } from './werequest.entity';
import { QueriesController } from './queries.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebRequest])],
  providers: [QueriesService],
  exports: [QueriesService],
  controllers: [QueriesController],
})
export class QueriesModule {}
