import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // "type": "mysql",
      // "host": "localhost",
      // "port": 3306,
      // "username": "rama0552_queries",
      // "password": "Queries2022",
      // "database": "rama0552_queries",
      // "entities": ["**/*.entity{.ts,.js}"]
      "type": "sqlite",
      "database": "requests",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    QueriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
