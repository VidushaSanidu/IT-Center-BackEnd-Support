import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { StaffProfile } from './profile.entity';

@Entity()
export class Telephone {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  phoneNumber: string;

  @ManyToOne(() => StaffProfile, (parent) => parent.telephones)
  profile: StaffProfile;
}
