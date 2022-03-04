import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { WebRequest } from './werequest.entity';

@Controller('queries')
export class QueriesController {
  constructor(private service: QueriesService) {}

  @Get()
  index(): Promise<WebRequest[]> {
    console.log('List all queries')
    return this.service.findAll();
  }

  @Get('unconsumed')
  unconsumed(): Promise<WebRequest[]> {
    console.log('List all unconsumed queries')
    return this.service.getUnConsumedQueries();
  }

  @Post('create')
  async create(@Body() request: WebRequest): Promise<any> {
    return this.service.create(request);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.service.delete(id);
  }

  @Post(':id/consumed')
  async consumed(@Param('id') id): Promise<any> {
    try {
      let query = await this.service.findById(id);
      query.isConsumed = true;
      console.log("Consume query with ID: ", id);
      return this.service.update(query);
    } catch (e) {
      console.error(e);
    }
  }
}
