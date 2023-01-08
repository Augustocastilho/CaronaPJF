module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // [
      //   'module-resolver',
      //   {
      //     extensions: [
      //       '.js',
      //       '.jsx',
      //       '.ts',
      //       '.tsx',
      //       '.android.js',
      //       '.android.tsx',
      //       '.ios.js',
      //       '.ios.tsx'
      //     ],
      //     //   root: ['.'],
      //     //   resolvePath(sourcePath, currentFile, ...otherparams /* opts */) {
      //     //     return resolvePath(sourcePath, currentFile, otherparams);
      //     //   },
      //     //   loglevel: 'verbose',

      //   }

      // ],
      [
        require('@babel/plugin-transform-runtime').default,
        {
          helpers: false,
          regenerator: true,
          corejs: false,
        },
      ],
      [
        require('@babel/plugin-transform-regenerator').default,
        {
          async: false,
        },
      ],
      [
        require('babel-plugin-module-resolver').default,
        {
          root: ['./app/javascript/'],
        },
      ],
      // ["@babel/plugin-syntax-class-properties"], 
    ]
  };
};
