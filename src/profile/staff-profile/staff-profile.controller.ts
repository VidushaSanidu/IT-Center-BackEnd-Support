import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StaffProfileService } from './staff-profile.service';
import { CreateProfileDto } from './dto/createProfile.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';

@Controller('staff-profile')
export class StaffProfileController {
  constructor(private readonly staffProfileService: StaffProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.staffProfileService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.staffProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffProfileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.staffProfileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffProfileService.remove(id);
  }
}
