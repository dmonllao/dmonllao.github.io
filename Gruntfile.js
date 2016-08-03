module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      csslint: {
          target: 'styles.css'
      },
      watch: {
          scripts: {
              files: 'styles.css',
              tasks: ['csslint'],
          },
      },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['csslint']);

};
