module.exports = function(grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9900
        }
      }
    },
    sass: {
      build: {
        options: {
          style: 'compact'
        },
        files: {
          'css/main.css' : 'css//scss/main.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: [
                'app/**/*.*',
                'fonts/**/*.*',
                'js/**/*.*',
                'images/**/*.*'
                ]
      },
      css: {
        files: ['css/scss/**/*.scss'],
        tasks: ['compile']
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('server',  ['connect', 'watch']);
};
