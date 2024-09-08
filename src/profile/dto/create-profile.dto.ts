import { IsNotEmpty, IsString } from 'class-validator';

export abstract class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  displayName: string;
}
