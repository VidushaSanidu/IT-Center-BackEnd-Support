import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Title } from 'enums/title.enum';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

// bavantha
export class CreateStudentProfileDto extends CreateProfileDto {
  @IsEnum(Title)
  title: Title;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  nameWithIntials: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date) // To correctly transform date string to Date object
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString({ each: true, message: 'Phone number must be a string.' })
  phoneNumber: string;

  @ValidateNested()
  @Type(() => EducationDto) // To validate nested object
  education: EducationDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HigherEduDto) // To validate nested objects
  higherEdu: HigherEduDto[];

  @IsString()
  otherQualification?: string;

  @ValidateNested()
  @Type(() => EmploymentDto) // To validate nested object
  employment: EmploymentDto;

  @ValidateNested()
  @Type(() => StudentDto) // To validate nested object
  user: StudentDto;
}
