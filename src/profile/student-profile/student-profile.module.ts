import { Module } from '@nestjs/common';
import { StudentProfileController } from './student-profile.controller';
import { StudentProfileService } from './student-profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telephone } from '../staff-profile/entities/telephone.entity';
import { Email } from '../staff-profile/entities/email.entity';
import { StudentProfile } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentProfile, Telephone, Email])],
  controllers: [StudentProfileController],
  providers: [StudentProfileService],
})
export class StudentProfileModule {}
