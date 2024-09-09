import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentProfileDto } from './createStudentProfile.dto';

// bavantha
export class UpdateStudentProfileDto extends PartialType(
  CreateStudentProfileDto,
) {}
