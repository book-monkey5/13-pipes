import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {
    pipe = new IsbnPipe(); 
  });

  it('should format an ISBN with a dash', () => {
    expect(pipe.transform('9783864909467'))
      .toBe('978-3864909467'); 
  });

  it('should ignore empty values', () => {
    expect(pipe.transform('')).toBe(''); 
  });
});
