import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { RoleGuard } from '../role/role.guard';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Post()
  @UseGuards(RoleGuard)
	create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
		return this.catsService.createCat(createCatDto);
	}

	@Get()
	findAll(@Query('breed') breed: 'European Shorthair' | 'American Shorthair') {
		return this.catsService.getCats(breed);
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.catsService.getCat(id);
    } catch (error) {
      throw new NotFoundException('Cat not found 😿');
    }
	}

	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() updateCatDto: UpdateCatDto) {
		return this.catsService.updateCat(id, updateCatDto)
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.catsService.deleteCat(id);
	}
}
