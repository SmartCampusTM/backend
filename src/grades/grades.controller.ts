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

import { Grade } from '@prisma/client';

import GradesService from '@/grades/grades.service';

import CreateGradeDto from '@/grades/dtos/create-grade.dto';
import UpdateGradeDto from '@/grades/dtos/update-grade.dto';

@Controller('grades')
export default class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createGradeDto: CreateGradeDto,
  ): Promise<Grade | null> {
    return this.gradesService.createGrade(createGradeDto);
  }

  // have to add filter
  @Get()
  async findAll(): Promise<Grade[] | null> {
    return this.gradesService.grades();
  }

  // Have to add filter
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Grade | null> {
    return this.gradesService.findGrade(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGradeDto: UpdateGradeDto,
  ): Promise<Grade | null> {
    return this.gradesService.updateGrade(id, updateGradeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.gradesService.deleteGrade(id);
  }
}
