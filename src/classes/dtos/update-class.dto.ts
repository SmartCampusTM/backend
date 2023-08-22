import { PartialType } from '@nestjs/mapped-types';

import { CreateClassDto } from '@/classes/dtos/create-class.dto';

export class UpdateClassDto extends PartialType(CreateClassDto) {}

export default UpdateClassDto;
