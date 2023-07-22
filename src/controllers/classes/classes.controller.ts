import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { ClassesService } from '@services/classes/classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(): string {
    return this.classesService.createClass();
  }

  @Get()
  findAll(): string {
    return this.classesService.classes();
  }

  @Get(':id')
  findOne(): string {
    return this.classesService.findClass();
  }

  @Patch(':id')
  update(): string {
    return this.classesService.updateClass();
  }

  @Delete(':id')
  delete(): string {
    return this.classesService.deleteClass();
  }
}
