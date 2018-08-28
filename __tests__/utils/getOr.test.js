import getOr from '../../src/utils/getOr';

describe('getOr util', () => {
  const movies = [
    {
      name: 'Pulp Fiction',
      director: { name: 'Quentin Tarantino' },
    },
  ];

  it('works properly', () => {
    const movieName = getOr(null, [0, 'name'])(movies);
    const directorName = getOr(null, '0.director.name')(movies);
    expect(movieName).toEqual('Pulp Fiction');
    expect(directorName).toEqual('Quentin Tarantino');
  });

  it('fallbacks to default value', () => {
    const actorName = getOr(null, '0.casts.0.name')(movies);
    expect(actorName).toBeNull();
  });
});
