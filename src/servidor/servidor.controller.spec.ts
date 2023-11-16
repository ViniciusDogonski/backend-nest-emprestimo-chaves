import { Test, TestingModule } from '@nestjs/testing';
import { ServidorController } from './servidor.controller';

describe('ServidorController', () => {
  let controller: ServidorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServidorController],
    }).compile();

    controller = module.get<ServidorController>(ServidorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
