import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Grade } from 'enums/grade.enum';
import { Title } from 'enums/title.enum';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { ALResultItemDto } from './aLResultItem.dto';

// Tharaka
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

  @IsEnum(Grade, { message: 'English O/L grade must be a valid grade.' })
  englishOL: Grade;

  @IsEnum(Grade, { message: 'Mathematics O/L grade must be a valid grade.' })
  mathematicsOL: Grade;

  @IsEnum(Grade, { message: 'Science O/L grade must be a valid grade.' })
  scienceOL: Grade;

  @IsArray()
  @ArrayMaxSize(4, { message: 'The array can have a maximum of 4 results.' })
  @ValidateNested({ each: true })
  @Type(() => ALResultItemDto)
  results: ALResultItemDto[];

  @IsOptional()
  @IsString()
  otherQualification?: string;

  @IsOptional()
  @IsString({ message: 'Institution must be a string.' })
  institution?: string;

  @IsOptional()
  @IsString({ message: 'Designation must be a string.' })
  designation?: string;

  @IsOptional()
  @IsString({ message: 'Office address must be a string.' })
  officeAddress?: string;

  @IsOptional()
  @IsString({ message: 'Office phone must be a string.' })
  officePhone?: string;
}
