/*
    npm i grunt 
    npm i load-grunt-taks (carga todos los plugins y tareas)
    npm i grunt-contrib-connect (conecta con el servidor)
    npm i grunt-contrib-watch (escuchar las tareas)
    npm i grunt-contrib-jshint
    npm i grunt-newer
    npm i grunt-contrib-uglify
    npm i grunt-contrib-copy
    npm i grunt-contrib-compress
    npm i grunt-contrib-symlink
    npm i grunt-contrib-concat
    npm i grunt-contrib-jade
*/

/* 
    grunt
    grunt connect watch
    grunt newer:jshint
    grunt compress
    grunt jade
*/

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        jshint:{
            ejemplo:{
                src:['ejemplo.js']
            }
        },
        watch:{ //automatizar y ejecutar tareas (grunt watch)
            ejemplo:{
                files: ['ejemplo.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.registerTask('default', []);
}