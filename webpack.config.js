const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        // Точка входа
        entry: './src/index.tsx',

        // Режим (development/production)
        mode: isProduction ? 'production' : 'development',

        // Source maps для отладки
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction
                ? 'static/js/[name].[contenthash:8].js'
                : 'static/js/bundle.js',
            chunkFilename: isProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : 'static/js/[name].chunk.js',
            clean: true, // Очищать dist при каждой сборке
            publicPath: '/', // Базовый путь для всех ресурсов
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'app': path.resolve(__dirname, 'src/app'),
            },
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                    '@babel/preset-typescript'
                                ],
                                cacheDirectory: true, // Кэширование для ускорения
                            }
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true, // Ускорение сборки
                                compilerOptions: {
                                    // Переопределяем настройки для dev сборки
                                    ...require('./tsconfig.json').compilerOptions,
                                    sourceMap: !isProduction,
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: true, // Автоматически включать CSS Modules для .module.css файлов
                                    localIdentName: isProduction
                                        ? '[hash:base64:8]'
                                        : '[path][name]__[local]--[hash:base64:5]',
                                },
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/media/[name].[hash:8][ext]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/fonts/[name].[hash:8][ext]'
                    }
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                inject: true, // Автоматически вставлять скрипты
                minify: isProduction ? {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                } : undefined,
            }),
        ],

        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            port: 3000,
            hot: true, // Горячая перезагрузка
            historyApiFallback: true, // Для SPA и React Router
            compress: true,
            open: true, // Автоматически открывать браузер
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
        },

        // Оптимизации для production
        optimization: isProduction ? {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        name: 'vendors',
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            runtimeChunk: 'single',
            minimize: true,
        } : {},

        // Производительность
        performance: {
            hints: isProduction ? 'warning' : false,
            maxAssetSize: 244 * 1024, // 244 KiB
            maxEntrypointSize: 244 * 1024,
        },
    };
};