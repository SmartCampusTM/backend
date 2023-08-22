import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { Classroom } from '@prisma/client';

import ClassroomsService from '@/classrooms/classrooms.service';

import CreateClassroomDto from '@/classrooms/dtos/create-classroom.dto';
import UpdateClassroomDto from '@/classrooms/dtos/update-classroom.dto';

@Controller('classrooms')
export default class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createClassroomDto: CreateClassroomDto,
  ): Promise<Classroom | null> {
    return this.classroomsService.createClassroom(createClassroomDto);
  }

  @Get()
  async findAll(): Promise<Classroom[] | null> {
    return this.classroomsService.classrooms();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Classroom | null> {
    return this.classroomsService.findClassroom(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateClassroomDto: UpdateClassroomDto,
  ): Promise<Classroom | null> {
    return this.classroomsService.updateClassroom(id, updateClassroomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.classroomsService.deleteClassroom(id);
  }
}
