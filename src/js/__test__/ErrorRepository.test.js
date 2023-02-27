import ErrorRepository from '../ErrorRepository';

test('add', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(255, 'Ok');
  const received = errorRepository.translate(255);
  expect(received).toBe('Ok');
});

test('constructor', () => {
  const errorRepository = new ErrorRepository([
    { code: 404, description: 'User is not found' },
  ]);
  const received = errorRepository.translate(404);
  expect(received).toBe('User is not found');
});

test('Unknown error', () => {
  const errorRepository = new ErrorRepository();
  const received = errorRepository.translate(1);
  expect(received).toBe('Unknown error');
});
