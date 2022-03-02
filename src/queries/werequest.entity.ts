import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WebRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
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
    type: 'clob',
    nullable: true,
  })
  fullData: string;
}
