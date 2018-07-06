import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'functions.js',
  output: {
    dir: 'tmp',
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [json(), resolve(), commonjs()]
};
