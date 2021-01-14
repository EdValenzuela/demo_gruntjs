module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        symlink:{
            sample:{
                files:{
                    'www/img/react.png': 'assets/img/react.png'
                }
            }
        }
    })
}