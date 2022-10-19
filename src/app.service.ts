import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service.type';
import { HeroById } from './proto/hero/HeroById';

@Injectable()
export class AppService implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  getHero(params: HeroById) {
    return this.heroService.findOne({ id: params.id });
  }
}
