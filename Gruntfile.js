"use strict";
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': '_main.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['js/*.js'],
                tasks: ['concat','uglify'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            default: {
                files: {
                    'main.js': 'js/*.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
