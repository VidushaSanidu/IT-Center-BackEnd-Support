import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

// bavantha
export class CreateStaffProfileDto extends CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsNotEmpty()
  @IsString()
  nominal: string;

  @IsNotEmpty()
  @IsString()
  extNo: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one email is required.' })
  @IsEmail({}, { each: true, message: 'Each email must be valid.' })
  emails: string[];

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one telephone number is required.' })
  @IsPhoneNumber(null, {
    each: true,
    message: 'Each phone number must be valid.',
  })
  telephoneNumbers: string[];
}
