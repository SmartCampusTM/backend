import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { Class } from '@prisma/client';

import ClassesService from '@/classes/classes.service';

import CreateClassDto from '@/classes/dtos/create-class.dto';
import UpdateClassDto from '@/classes/dtos/update-class.dto';

@Controller('classes')
export default class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createClassDto: CreateClassDto,
  ): Promise<Class | null> {
    return this.classesService.createClass(createClassDto);
  }

  @Get()
  async findAll(@Query('teacher') teacherId?: string): Promise<Class[] | null> {
    return teacherId
      ? this.classesService.classesByTeacher(teacherId)
      : this.classesService.classes();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Class | null> {
    return this.classesService.findClass(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateClassDto: UpdateClassDto,
  ): Promise<Class | null> {
    return this.classesService.updateClass(id, updateClassDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.classesService.deleteClass(id);
  }
}
