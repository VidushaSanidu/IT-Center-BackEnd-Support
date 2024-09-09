import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffProfileDto } from './createStaffProfile.dto';

// bavantha
export class UpdateProfileDto extends PartialType(CreateStaffProfileDto) {}
