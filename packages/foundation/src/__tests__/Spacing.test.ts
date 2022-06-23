import { Spacing } from '..';

test('Spacing must be readonly', () => {
  expect(() => {
    Spacing.xs = 'xs';
  }).toThrow();
});

test('snapshot of Spacing', () => {
  expect(Spacing).toMatchSnapshot();
});
