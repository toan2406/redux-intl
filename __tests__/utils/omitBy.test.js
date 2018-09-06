import omitBy from '../../src/utils/omitBy';

describe('omitBy util', () => {
  it('omits property', () => {
    const result = omitBy(value => typeof value === 'undefined')({
      foo: 'foo',
      bar: undefined,
    });
    expect(result).toEqual({ foo: 'foo' });
  });
});
