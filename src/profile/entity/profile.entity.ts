import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  displayName: string;

  @Column({ default: false })
  isApproved: boolean;
}
