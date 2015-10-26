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
      },
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/assets/css/main.css': 'assets/css/main.sass' 
        }
      }
    },
    
    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'assets/img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'build/assets/img/',
            ext: '.jpg'
          }
        ]
      }
    },
    
    clean: {
      build: {
        src: [ 'build' ]
      },
    },
    
    copy: {
      build: {
        cwd: '.',
        src: ['**/*.html', '!**/node_modules/**'],
        dest: 'build',
        expand: true
      },
      resets: {
        cwd: 'assets/css/',
        src: ['reset.css'],
        dest: 'build/assets/css',
        expand: true
      }
    },
    
    uglify: {
      build: {
        files: {
          'build/assets/js/functions.js': ['assets/js/functions.js']
        }
      }
    },
    
    watch: {
      files: ['assets/css/*.sass'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  grunt.registerTask('default', ['sass:dist']);
  grunt.registerTask('build', ['clean', 'copy', 'sass:build','imagemin', 'uglify']);
};