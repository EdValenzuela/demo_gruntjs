module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        connect:{
            dev:{
                options:{
                    base: 'www',
                    livereload: true
                }
            }
        },
        watch:{
            www:{
                files: ['www/index.html'],
                livereload:true
            }
        }
    });
    grunt.registerTask('default', []);;
}