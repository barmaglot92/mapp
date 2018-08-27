import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  patronymic: string;

  @Column('date')
  dateOfBirth: string;

  @Column('date')
  startWork: string;

  @Column('date')
  stopWork: string;

  @Column()
  workPhone: number;

  @Column()
  mobilePhone: number;

  @Column()
  email: string;

  @Column()
  position: string;

  @Column()
  isActive: string;

  @Column()
  password: string;

  @Column()
  roles: string;
}
