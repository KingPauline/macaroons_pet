module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {

                },
                files: {
                    'dist/style.css': 'src/style.less',
                    'dist/theme.css': 'src/theme.less'
                }
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': 'dist/style.css',
                    'dist/theme.min.css': 'dist/theme.css'
                }
            }
        },
        clean: ['dist/style.css', 'dist/theme.css'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean')
    // grunt.registerTask('default', ['less', 'cssmin']);
};