import {Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn} from 'typeorm';

@Entity({
  name: 'web_request'
})
export class WebRequest {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
    name: 'host_name'
  })
  hostName: string;

  @Column({
    nullable: true,
  })
  query: string;

  @Column({
    nullable: true,
  })
  params: string;

  @Column({
    nullable: true,
    default: 'no-body'
  })
  body: string;

  @Column({
    nullable: true,
  })
  ip: string;

  @Column({
    nullable: true,
  })
  method: string;

  @Column({
    nullable: true,
  })
  headers: string;

  @CreateDateColumn({
    name: 'request_date'
  })
  requestDate: Date;
}
