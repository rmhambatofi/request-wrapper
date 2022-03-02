import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WebRequest } from './werequest.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class QueriesService {
  constructor(
    @InjectRepository(WebRequest)
    private requestRepository: Repository<WebRequest>,
  ) {}

  async findAll(): Promise<WebRequest[]> {
    return await this.requestRepository.find();
  }

  async create(request: WebRequest): Promise<WebRequest> {
    return await this.requestRepository.save(request);
  }

  async update(request: WebRequest): Promise<UpdateResult> {
    return await this.requestRepository.update(request.id, request);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.requestRepository.delete(id);
  }
}
