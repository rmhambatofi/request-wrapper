import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { WebRequest } from './werequest.entity';

@Controller('queries')
export class QueriesController {
  constructor(private service: QueriesService) {}

  @Get()
  index(): Promise<WebRequest[]> {
    return this.service.findAll();
  }

  @Post('create')
  async create(@Body() request: WebRequest): Promise<any> {
    return this.service.create(request);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.service.delete(id);
  }
}
