import { CreateGradeDto } from '@/modules/grades/dtos/create-grade.dto';
import { UpdateGradeDto } from '@/modules/grades/dtos/update-grade.dto';
import { GradesService } from '@/services/grades/grades.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { Grade } from '@prisma/client';

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createGradeDto: CreateGradeDto,
  ): Promise<Grade | null> {
    return await this.gradesService.createGrade(createGradeDto);
  }

  // have to add filter
  @Get()
  async findAll(): Promise<Grade[] | null> {
    return await this.gradesService.grades();
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
