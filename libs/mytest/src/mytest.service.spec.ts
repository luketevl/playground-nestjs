import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MytestService } from './mytest.service';

describe('MytestService', () => {
  let service: MytestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MytestService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((val) => `Val = ${val}`),
          },
        },
      ],
    }).compile();

    service = module.get<MytestService>(MytestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('test function', () => {
    it('should return a Hello Test!', () => {
      expect(service.test()).toEqual('Hello Test!');
    });
  });
});
