import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroById } from './proto/hero/HeroById';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getHero(@Param('id') id: HeroById['id']) {
    return this.appService.getHero({ id });
  }
}
