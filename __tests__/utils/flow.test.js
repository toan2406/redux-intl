import flow from '../../src/utils/flow';

describe('flow util', () => {
  it('composes functions', () => {
    const result = flow(x => x + 1, x => x * 2, x => x / 3)(5);
    expect(result).toEqual(4);
  });
});
