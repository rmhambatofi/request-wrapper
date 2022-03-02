import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { QueriesService } from './queries/queries.service';
import { WebRequest } from './queries/werequest.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly queryService: QueriesService,
  ) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log('====================== GET ===========================');
    console.log(request.hostname);
    console.log('====================== END GET ===========================');
    return this.appService.getHello();
  }

  @Post('AutoResponse')
  autoResponse(@Req() request: Request): string {
    const req = new WebRequest();
    req.query = request.query ? request.query.toString() : null;
    req.params = request.params ? request.params.toString() : null;
    req.ip = request.ip;
    req.hostName = request.hostname;
    req.method = request.method;
    req.body = request.body;
    this.queryService.create(req).then((value) => {
      console.log(value, ' created!');
    });
    return 'OK';
  }
}
