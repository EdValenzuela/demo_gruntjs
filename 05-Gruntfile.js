module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            sample:{
                files:{
                    'sample_<%= pkg.version %>.js' : 'sample.js'
                }
            }
        }
    })
}