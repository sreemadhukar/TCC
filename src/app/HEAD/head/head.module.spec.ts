import { HeadModule } from './head.module';

describe('HeadModule', () => {
  let headModule: HeadModule;

  beforeEach(() => {
    headModule = new HeadModule();
  });

  it('should create an instance', () => {
    expect(headModule).toBeTruthy();
  });
});
