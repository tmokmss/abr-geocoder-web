/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Next.jsプロジェクトをStatic Exportsで静的ファイルとして出力する
  basePath: process.env.NEXT_CONFIG_BASE_PATH,
  // https://stackoverflow.com/a/78220610
  images: {
    loader: 'custom',
    loaderFile: './src/custom-image-loader.js',
  },
};

module.exports = nextConfig;
