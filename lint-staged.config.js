module.exports = {
	// Check TS files for no errors
	'**/*.(ts|tsx)': () => 'npx tsc --noEmit',

	// Lint and format TS and JS files
	'**/*.(jsx|js)': (filenames) => [
		`npx eslint --fix ${filenames.join(' ')}`,
		`npx prettier --write ${filenames.join(' ')}`,
	],
};
