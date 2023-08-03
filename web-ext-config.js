
module.exports = {
    verbose: false,
    sourceDir: "./dist/firefox",
    artifactsDir: 'packages',
    build: {
        filename: `extension.firefox.${process.env.npm_package_version}.zip`,
        overwriteDest: true,
    }

}