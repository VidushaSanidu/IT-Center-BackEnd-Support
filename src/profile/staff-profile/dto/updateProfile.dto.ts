import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './createProfile.dto';

// This Partial Type function creates a copy of createLogsDto
// And keeping eveything optional
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
