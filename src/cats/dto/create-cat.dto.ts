import { MinLength, IsEnum } from 'class-validator';

export class CreateCatDto {
  @MinLength(3)
  name: string;

  @IsEnum(['European Shorthair', 'American Shorthair'], {
    message: 'Not a valid breed',
  })
  breed: 'European Shorthair' | 'American Shorthair';
}
