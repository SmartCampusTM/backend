import { MinLength } from 'class-validator';

export class CreateClassroomDto {
  @MinLength(1)
  name!: string;

  number!: number;
}
