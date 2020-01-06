
//Uses withPlugin for multiple plugins, withFonts to load fonts and withImages to load Images
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts');
const withImages = require('next-images')
module.exports = withPlugins([withFonts,withImages]);


