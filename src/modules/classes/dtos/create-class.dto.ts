import { MinLength } from 'class-validator';

export class CreateClassDto {
  teacherId!: string;

  @MinLength(2)
  name!: string;

  @MinLength(2)
  description!: string;
}

export default CreateClassDto;
