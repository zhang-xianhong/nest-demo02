import { HttpModule, Module } from '@nestjs/common';
import { CatsService } from './cats.service';

@Module({
  imports: [HttpModule],
  providers: [CatsService],
})
export class CatsModule {}
