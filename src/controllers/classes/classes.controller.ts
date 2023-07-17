import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Patch,
  Post,
} from '@nestjs/common';

import { ClassesService } from '@services/classes/classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getClassesGet(): string {
    return 'Ok';
  }

  @Get()
  @HttpCode(200)
  getClasses(): string {
    return 'Ok';
  }

  @Post()
  @HttpCode(201)
  addClass(): string {
    return 'Ok';
  }

  @Get(':id')
  @HttpCode(200)
  getClass(): string {
    return 'OK';
  }

  @Patch(':id')
  @HttpCode(201)
  patchClass(): string {
    return 'OK';
  }

  @Delete(':id')
  deleteClass(): string {
    return 'OK';
  }
}
