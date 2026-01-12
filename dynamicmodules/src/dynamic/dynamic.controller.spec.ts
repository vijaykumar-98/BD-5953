import { Test, TestingModule } from '@nestjs/testing';
import { DynamicController } from './dynamic.controller';
import { DatabaseService } from './dynamic.service';

describe('DynamicController', () => {
  let controller: DynamicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicController],
      providers: [DatabaseService],
    }).compile();

    controller = module.get<DynamicController>(DynamicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
