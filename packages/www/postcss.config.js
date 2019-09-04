/* eslint-disable import/no-commonjs */

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('doiuse'),
		require('cssnano'),
		require('postcss-custom-properties'),
		require('postcss-copy')({
			dest: 'dist/css'
			// template(fileMeta) {
			// 	return fileMeta.path + fileMeta.name + '.' + fileMeta.ext;
			// }
        }),
		require('postcss-preset-env'),
		//require('stylelint')
	]
};
