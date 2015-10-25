module.exports = function(grunt) {

grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'assets/css/main.css': 'assets/css/main.sass'       // 'destination': 'source'
      }
    }
  },
  watch: {
  files: ['assets/css/*.sass'],
  tasks: ['sass']
  },
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass']);
};