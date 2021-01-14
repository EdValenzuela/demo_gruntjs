module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        copy:{
            //creando la configuracion basica el plugin copy
            sample: {
                options:{
                    process: function(content, path){
                        return "Contenido nuevo \n " + content;
                    },
                    node:true //copiar tambien los permisos
                },

                src: 'src/sample.txt', //ruta archivo a copiar
                dest: 'dest/sample.txt' // ruta destino archivo a copiar
            }
        }
    })
    
}