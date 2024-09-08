import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentProfileDto } from './createStudentProfile.dto';

export class UpdateStudentProfileDto extends PartialType(
  CreateStudentProfileDto,
) {}
