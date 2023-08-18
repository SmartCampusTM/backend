import { Injectable } from '@nestjs/common';

import { Teacher } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from '@/modules/teachers/dtos/create-teacher.dto';
import { UpdateTeacherDto } from '@/modules/teachers/dtos/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTeacher(
    createTeacherDto: CreateTeacherDto,
  ): Promise<Teacher | null> {
    return this.prismaService.teacher.create({
      data: createTeacherDto,
    });
  }

  async teachers(): Promise<Teacher[] | null> {
    return this.prismaService.teacher.findMany();
  }

  async findTeacher(id: string): Promise<Teacher | null> {
    return this.prismaService.teacher.findUnique({
      where: {
        id,
      },
    });
  }

  async updateTeacher(
    id: string,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher | null> {
    return this.prismaService.teacher.update({
      where: {
        id,
      },
      data: updateTeacherDto,
    });
  }

  async deleteTeacher(id: string): Promise<string> {
    await this.prismaService.teacher.delete({
      where: {
        id,
      },
    });

    return 'Teacher deleted';
  }
}

export default TeachersService;
