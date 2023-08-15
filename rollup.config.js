const path = require('path');
const commonjs = require("@rollup/plugin-commonjs");
const alias = require('@rollup/plugin-alias');
const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const styles = require('rollup-plugin-styles');
const svgr = require('@svgr/rollup');
const image = require('@rollup/plugin-image');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const visualizer = require('rollup-plugin-visualizer').visualizer;

const pkg = require('./package.json');

function svgrPlugin() {
	return {
		load(id) {
			if (id.endsWith('.svg?svgr')) {
				// Chop off the svgr query param
        return id.slice(0, -5);
			}
		},
    transform(code, id) {
      if (id.endsWith('?svgr')) {
        // Chop off the svgr query param
        const filename = id.slice(0, -5);
        return svgr().transform(code, filename);
      }
    }
	};
}

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "umd",
        sourcemap: true,
        name: "ReactUSWDS",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      svgrPlugin(),
      resolve({
        jsnext: true,
      }),
      alias({
        entries: [
          { find: '@uswds/uswds/fonts', replacement: path.resolve(__dirname, './node_modules/@uswds/uswds/dist/fonts') },
        ]
      }),
      image({ exclude: ['**/*.svg?svgr'] }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.build.json" }),
      styles({
        mode: ['extract', 'index.css'],
        modules: true,
        sass: {
          includePaths: [
            './node_modules/@uswds',
            './node_modules/@uswds/uswds/packages',
            // './node_modules/@uswds/uswds/dist/fonts'
          ],
        },
      }),
      visualizer()
    ],
  },
];
