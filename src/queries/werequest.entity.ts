import {Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, Timestamp} from 'typeorm';

@Entity({
  name: "web_request"
})
export class WebRequest {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
    name: "host_name"
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
    nullable: true
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

  @Column({
    name: "is_consumed",
    type: "tinyint",
    nullable: true,
  })
  isConsumed: boolean;

  @CreateDateColumn({
    name: "request_date",
    type: "timestamp"
  })
  requestDate: Date;
}
