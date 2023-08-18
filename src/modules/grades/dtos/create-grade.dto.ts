import { IsNumber } from 'class-validator';

export class CreateGradeDto {
  @IsNumber()
  percentage!: number;
}

export default CreateGradeDto;
