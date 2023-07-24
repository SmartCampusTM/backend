import { MinLength, IsEmail, IsUrl } from 'class-validator';

export class CreateTeacherDto {
  @IsEmail()
  email!: string;

  @MinLength(2)
  name!: string;

  @MinLength(2)
  lastName!: string;

  @MinLength(8)
  password!: string;

  @IsUrl()
  profilePicture!: string;
}
