import { Hero } from 'src/proto/hero/Hero';

export interface HeroService {
  findOne: (params: { id: number }) => Promise<Hero>;
}
