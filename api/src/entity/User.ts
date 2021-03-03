import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: '20' })
  name: string;

  @Column({ length: '30', unique: true })
  email: string;

  @Column()
  password: string;
}
