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

import { Class } from '@prisma/client';

import { ClassesService } from '@services/classes/classes.service';

import { CreateClassDto } from '@/modules/classes/dtos/create-class.dto';
import { UpdateClassDto } from '@/modules/classes/dtos/update-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createClassDto: CreateClassDto,
  ): Promise<Class | null> {
    return this.classesService.createClass(createClassDto);
  }

  @Get()
  async findAll(): Promise<Class[] | null> {
    return this.classesService.classes();
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

export default ClassesController;
