import { Test, TestingModule } from '@nestjs/testing';
import { ServidorService } from './servidor.service';

describe('ServidorService', () => {
  let service: ServidorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServidorService],
    }).compile();

    service = module.get<ServidorService>(ServidorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
