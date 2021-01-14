module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jshint:{
            sample:{
                src: 'src/**/*.js'
            }
        },
        //comando watch:jshint
        watch:{
            jshint:{
                files: ['src/**/*.js'], //se analizaran todos los js guardados en la carpeta src
                task: ['newer:jshint'] //invoca el plugin newer para saber que archivos fueron modificados
            }
        }
    })
}