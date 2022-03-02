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
    console.log('====================== POST ===========================');
    console.log(request);
    const req = new WebRequest();
    req.query = request.query ? JSON.stringify(request.query) : null;
    req.params = request.params ? JSON.stringify(request.params) : null;
    req.ip = request.ip;
    req.hostName = request.hostname;
    req.method = request.method;
    req.body = JSON.stringify(request.body);
    req.headers = JSON.stringify(request.headers)

    this.queryService.create(req).then((value) => {
      console.log(value, ' created!');
    });
    return 'OK';
    console.log('====================== END POST ==========================');
  }
}
