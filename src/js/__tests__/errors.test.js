import ErrorRepository from '../errors';

test('should determine data correctly', () => {
  const error = new ErrorRepository();
  error.errorBody(1, 'first character');
  expect(error.translate(1)).toBe('first character');
});

test('should show error', () => {
  const error = new ErrorRepository();
  error.errorBody('just text');
  expect(() => error.translate()).toThrow(new Error('Unknown error'));
});
