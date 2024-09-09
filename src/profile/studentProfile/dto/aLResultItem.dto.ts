import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Grade } from 'enums/grade.enum';

// Tharaka
export class ALResultItemDto {
  @IsNotEmpty({ message: 'Subject is required.' })
  @IsString({ message: 'Subject must be a string.' })
  subject: string;

  @IsNotEmpty({ message: 'Grade is required.' })
  @IsEnum(Grade, {
    message: 'Grade must be a valid value from the Grade enum.',
  })
  grade: Grade;
}
