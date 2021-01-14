module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jade:{
            sample:{
                options:{
                    pretty:true,
                    // data:{
                    //     title: 'Ejemplo con plantilla jade',
                    //     body: 'Contenido del sitio web creado con Grunt y Jade'
                    // }
                    data : grunt.file.readJSON('data.json')
                },
                src: 'index.jade',
                dest:'index.html'
            }
        }
    })
}