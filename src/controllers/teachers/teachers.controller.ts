import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  ValidationPipe,
  Param,
} from '@nestjs/common';

import { Teacher } from '@prisma/client';

import { CreateTeacherDto } from '@/modules/teachers/dtos/create-teacher.dto';
import { UpdateTeacherDto } from '@/modules/teachers/dtos/update-teacher.dto';
import { TeachersService } from '@/services/teachers/teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createTeacherDto: CreateTeacherDto,
  ): Promise<Teacher | null> {
    return this.teachersService.createTeacher(createTeacherDto);
  }

  @Get()
  async findAll(): Promise<Teacher[] | null> {
    return this.teachersService.teachers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teacher | null> {
    return this.teachersService.findTeacher(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher | null> {
    return this.teachersService.updateTeacher(id, updateTeacherDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.teachersService.deleteTeacher(id);
  }
}

export default TeachersController;
