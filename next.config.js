// next.config.js
const fetch = require('isomorphic-unfetch');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = 
	withImages(
		withSass({
		  	target: "server",
 		})
	)