import { MinLength, IsEnum, IsEmail, IsDate, IsFQDN, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(2)
  name: string;

  @MinLength(2)
  lastName: string;

  @MinLength(8)
  password: string;

  @IsUrl()
  profilePicture: string;

  @IsEnum(['admin', 'teacher', 'student'], {
    message: 'Not a valid permission group',
  })
  permission: string;
}
