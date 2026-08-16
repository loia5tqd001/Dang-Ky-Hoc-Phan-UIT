import { getDanhSachTiet } from './utils';

jest.mock('./', () => ({ isProd: false }));

describe('getDanhSachTiet', () => {
  it.each([
    ['12345', ['1', '2', '3', '4', '5']],
    ['678910', ['6', '7', '8', '9', '10']],
    ['910', ['9', '10']],
    ['111213', ['11', '12', '13']],
    ['11,12,13', ['11', '12', '13']],
    ['*', ['*']],
  ])('parses %s into individual periods', (input, expected) => {
    expect(getDanhSachTiet(input)).toEqual(expected);
  });
});
