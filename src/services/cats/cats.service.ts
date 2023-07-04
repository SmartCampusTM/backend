import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '@/modules/cats/dtos/create-cat.dto';
import { UpdateCatDto } from '@/modules/cats/dtos/update-cat.dto';

@Injectable()
export class CatsService {
  private cats = [
    { id: 0, name: 'Millie', breed: 'European Shorthair' },
    { id: 1, name: 'Luna', breed: 'American Shorthair' },
  ];

  createCat(createCatDto: CreateCatDto) {
    const cat = {
      ...createCatDto,
      id: Date.now(),
    };
    this.cats.push(cat);

    return cat;
  }

  getCats(breed?: 'European Shorthair' | 'American Shorthair') {
    if (breed) {
      return this.cats.filter((cat) => cat.breed === breed);
    }

    return this.cats;
  }

  getCat(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new Error('Cat not found 😿');
    }

    return cat;
  }

  updateCat(id: number, updateCatDto: UpdateCatDto) {
    this.cats = this.cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, ...updateCatDto };
      }

      return cat;
    });

    return this.getCat(id);
  }

  deleteCat(id: number) {
    const cat = this.getCat(id);
    this.cats = this.cats.filter((cat) => cat.id !== id);

    return cat;
  }
}
