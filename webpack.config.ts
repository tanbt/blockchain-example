import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

export default config;