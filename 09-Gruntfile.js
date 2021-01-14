module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        concat:{
            sample:{
                options:{
                    banner: '/* Header de los archivos js/*\n',
                    footer: '\n/* Footer de los archivos JS*/',
                    separator:' \n\n/* Next File */\n\n',
                    stripBanners: true // para los comentarios se quitaran
                },
                files:{
                    'all.js': ['one.js', 'two.js', 'three.js' ]
                }
            }
        }
    })
}