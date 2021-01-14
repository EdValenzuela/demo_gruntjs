module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        //Configuracion inicial plugin de compresion
        compress:{
            samples:{
                options:{
                    archive: 'books.zip'
                },
                src: ['book.txt', 'book2.txt'] //archivo a comprimir
                // dest: 'book.txt.gz' //destino del archivo comprimido
            }
        }
    });
}