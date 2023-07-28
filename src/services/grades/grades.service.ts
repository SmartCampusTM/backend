import { UpdateUserDto } from '@/modules/users/dtos/update-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, Prisma, Grade } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGradeDto } from '@/modules/grades/dtos/create-grade.dto';
import { UpdateGradeDto } from '@/modules/grades/dtos/update-grade.dto';

@Injectable()
export class GradesService {
    constructor(private readonly prisma: PrismaService) {}

  async createGrade(createGradeDto: CreateGradeDto): Promise<Grade | null> {
    return await this.prisma.grade.create({
      data: createGradeDto,
    });
  }

  async grades(): Promise<Grade[] | null> {
    return await this.prisma.grade.findMany();
  }

  async findGrade(id: string): Promise<Grade | null> {
    try {
      return await this.prisma.grade.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          {
            status:
              error.code == 'P2023'
                ? HttpStatus.BAD_REQUEST
                : HttpStatus.INTERNAL_SERVER_ERROR,
            error:
              error.code == 'P2023'
                ? error.meta?.message
                : 'Internal server error',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      throw error;
    }
  }

  async updateGrade(
    id: string,
    updateGradeDto: UpdateGradeDto,
  ): Promise<Grade | null> {
    return await this.prisma.grade.update({
      where: {
        id: id,
      },
      data: {...updateGradeDto},
    });
  }

  async deleteGrade(id: string): Promise<string> {
    await this.prisma.grade.delete({
      where: {
        id: id,
      },
    });

    return 'Grade deleted';
  }
}
