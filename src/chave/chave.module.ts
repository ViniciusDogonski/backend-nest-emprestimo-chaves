import { Module } from '@nestjs/common';
import { ChaveController } from './chave.controller';
import { ChaveService } from './chave.service';

@Module({
  controllers: [ChaveController],
  providers: [ChaveService]
})

export class ChaveModule {}
