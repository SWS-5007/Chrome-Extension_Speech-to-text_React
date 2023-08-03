
const PACKAGE = require('./package.json')
const path = require('path')
const shell = require('shelljs')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const BUILD_VERSION = PACKAGE.version

const build_targets = ["chrome", "edge", "firefox"]

// @ts-ignore
module.exports = (env, args) => {
  const opts = {
    ENV: args.mode
  }

  let common, development, production

  const build = build_targets.map((target) => {

    let outputDir = `dist/${target}`

    let common = {
      entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/options.tsx'),
        background: path.resolve('src/background.ts'),
        initialize: path.resolve('src/content/initialize.ts'),
        boundless: path.resolve('src/content/boundless.ts'),
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              { loader: 'ts-loader' },
              { loader: "ifdef-loader", options: opts }
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
            type: 'asset/resource',
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
          new TsconfigPathsPlugin({
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
          }),
        ],
      },
      plugins: [
        new CleanWebpackPlugin({
          cleanStaleWebpackAssets: false,
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve('src/static'),
              to: path.resolve(outputDir)
            },
            {
              from: path.resolve(`src/manifest/${target}/manifest.json`),
              to: path.resolve(outputDir),
              force: true,
              transform(content: { toString: () => string }) {
                const newString = content.toString().replace('$BUILD_VERSION', BUILD_VERSION)
                return newString;
              },
            },
          ],
        }),
        ...getHtmlPlugins(['popup', 'options']),
      ],
      output: {
        filename: '[name].js',
        path: path.resolve(outputDir),
      },
      optimization: {
        splitChunks: {
          chunks(chunk: { name: string }) {
            return (
              chunk.name !== 'background' &&
              chunk.name !== 'initialize' &&
              chunk.name !== 'boundless'
            )
          },
        },
      }
    }

    let development = {
      devtool: 'cheap-module-source-map'
    }

    let production = {
    }


    switch (args.mode) {
      case 'development':
        return merge(common, development)
      case 'production':
        return merge(common, production)
      default:
        throw new Error('No matching configuration was found!');
    }
  })

  console.log(build)


  return build
}



function getHtmlPlugins(chunks: string[]) {
  const htmlPlugins = chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  )
  return htmlPlugins;
}
