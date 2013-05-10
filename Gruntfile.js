module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        clean: {
            files: ['dist']
        },
        server:{
            port:8000,
            base:'.'
        },
        src: 'jquery.simpleCenter.js',
        lint:{
            files:['<%= src %>', 'test/*.js']
        },
        qunit:{
            files:['test/*.html']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true,
                separator: ';'
            },
            dist: {
                src: '<%= src %>',
                dest: 'dist/jquery.simpleCenter.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                files: {
                    'dist/jquery.simpleCenter.min.js': ['<%= src %>']
                }
            }
        },
        watch: {
            files: ['jquery.simpleCenter.js'],
            tasks: ['default']
        }
    });
    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};
