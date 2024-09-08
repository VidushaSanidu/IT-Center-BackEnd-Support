import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffProfileDto } from './createStaffProfile.dto';

export class UpdateProfileDto extends PartialType(CreateStaffProfileDto) {}
