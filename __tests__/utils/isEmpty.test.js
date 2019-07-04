import isEmpty from '../../src/utils/isEmpty';

describe('isEmpty util', () => {
  it.each`
    input             | output
    ${undefined}      | ${false}
    ${null}           | ${false}
    ${{ foo: 'bar' }} | ${false}
    ${[1, 2, 3]}      | ${false}
    ${'foo'}          | ${false}
    ${100}            | ${true}
    ${''}             | ${true}
    ${{}}             | ${true}
    ${[]}             | ${true}
  `('isEmpty of $input is $output', ({ input, output }) => {
    expect(isEmpty(input)).toEqual(output);
  });
});
