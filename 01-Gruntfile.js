module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jshint:{
            sample:{
                files: 'src/*.js'
            }
        },
        //Referencia al plugin connect, configuracion
        connect:{
            server:{
                options:{
                    port: 3000,
                    base: 'www', //carpeta del proyecto
                    keepalive: true,
                    // hostname: '',
                    open: {
                        target: 'http://localhost:3000/index.html',
                        appName: 'chrome',
                        callback: function(){
                            console.log("Pagina y servidor de grunt");
                        }
                    }
                }
            }
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', []);
}