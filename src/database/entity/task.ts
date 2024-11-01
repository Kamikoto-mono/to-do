import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export default class Task{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  description: string;
}