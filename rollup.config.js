import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
    commonjs(),
  ],
  external: [
    'react',
    'react-redux',
    'invariant',
    'intl-messageformat',
    'intl-relativeformat',
    'intl-format-cache',
  ],
  watch: {
    include: 'src/**',
  },
};
