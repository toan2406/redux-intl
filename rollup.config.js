import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.js', format: 'cjs' },
    { file: 'lib/index.es.js', format: 'es' },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['react', 'intl-messageformat'],
  watch: {
    include: 'src/**',
  },
};
