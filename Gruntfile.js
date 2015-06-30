// Generated on 2014-02-07 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Automatically inject Bower components into the app
    bowerInstall: {
      target: {
        src: [
          'app/index.html',
        ]
      }
    }

  });

/*
  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
*/
};
