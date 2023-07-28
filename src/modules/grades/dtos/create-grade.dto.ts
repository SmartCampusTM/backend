import { IsNumber } from 'class-validator';

export class CreateGradeDto {
  @IsNumber()
  percentage!: number
}
